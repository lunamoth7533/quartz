#!/usr/bin/env python3
"""Lint the vault: links, heading/block anchors, canvases, Bases and frontmatter.

    python3 .claude/hooks/vault_lint.py            # audit the whole vault
    python3 .claude/hooks/vault_lint.py FILE...    # audit specific files
    python3 .claude/hooks/vault_lint.py --hook     # Claude Code PostToolUse hook

Hook mode reads the tool payload on stdin, lints only the written file and exits 2
with the errors on stderr, which Claude Code feeds back so the write gets fixed.
Standard library only; YAML goes through /usr/bin/ruby (Psych), as the build tools do.
"""
import json
import os
import re
import subprocess
import sys
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SKIP_DIRS = {".git", ".obsidian", ".claude", ".claudian", ".omc", ".trash"}

WIKILINK = re.compile(r"\[\[([^\[\]\n]+?)\]\]")
FENCE = re.compile(r"^\s*(```|~~~)")
INLINE_CODE = re.compile(r"`[^`\n]*`")
BLOCK_ID = re.compile(r"(?:^|\s)\^([A-Za-z0-9-]+)\s*$")
HEADING = re.compile(r"^(#{1,6})\s+(.+?)\s*$")
IN_FOLDER = re.compile(r'file\.inFolder\("([^"]+)"\)')
DV_FROM = re.compile(r'^\s*FROM\s+"([^"]+)"', re.M)
SIDES = {"top", "right", "bottom", "left"}
ENDS = {"none", "arrow"}
PRESET_OR_HEX = re.compile(r"^([1-6]|#[0-9A-Fa-f]{6})$")

RUBY_YAML = (
    "require 'yaml'; require 'json'; require 'date';"
    "puts JSON.generate(JSON.parse(STDIN.read).map { |s| begin;"
    " {'ok'=>true,'data'=>YAML.safe_load(s, permitted_classes: [Date, Time], aliases: false)};"
    " rescue StandardError => e; {'ok'=>false,'error'=>e.message}; end })"
)


def norm_heading(text):
    return re.sub(r"[^0-9a-z]+", "", text.lower())


class Vault:
    def __init__(self, root):
        self.root = root
        self.files = []
        for dirpath, dirnames, filenames in os.walk(root):
            dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
            self.files += [
                Path(dirpath, f).relative_to(root).as_posix()
                for f in filenames
                if f != ".DS_Store"
            ]
        self.folders = set()
        for p in self.files:
            parts = p.split("/")[:-1]
            self.folders |= {"/".join(parts[:i]) for i in range(1, len(parts) + 1)}
        self.by_path = {p.lower(): p for p in self.files}
        self.by_name = defaultdict(list)
        for p in self.files:
            name = p.rsplit("/", 1)[-1].lower()
            self.by_name[name].append(p)
            if name.endswith(".md"):
                self.by_name[name[:-3]].append(p)
        self._anchors = {}
        self._types = {}

    def note_type(self, rel):
        """note_type from a note's frontmatter (folders no longer say what a note is)."""
        if rel not in self._types:
            m = re.search(r"^note_type:\s*[\"']?([\w-]+)", frontmatter_block(read(self.root / rel)) or "", re.M) if rel.endswith(".md") else None
            self._types[rel] = m.group(1) if m else None
        return self._types[rel]

    def resolve(self, target, src):
        """Mirror Obsidian: exact vault path, then path suffix, then shortest basename match."""
        t = target.strip().lower()
        if not t:
            return src
        if "/" in t:
            for cand in (t, t + ".md"):
                if cand in self.by_path:
                    return self.by_path[cand]
            hits = [p for k, p in self.by_path.items() if k.endswith("/" + t) or k.endswith("/" + t + ".md")]
        else:
            hits = self.by_name.get(t, [])
        return min(hits, key=len) if hits else None

    def anchors(self, rel):
        if rel not in self._anchors:
            heads, blocks = set(), set()
            for line in code_free_lines(read(self.root / rel)):
                m = HEADING.match(line)
                if m:
                    heads.add(norm_heading(m.group(2)))
                b = BLOCK_ID.search(line)
                if b:
                    blocks.add(b.group(1))
            self._anchors[rel] = (heads, blocks)
        return self._anchors[rel]

    def check_link(self, raw, src):
        """Return an error string for a broken [[link]], or None."""
        target, _, sub = raw.replace("\\|", "|").split("|", 1)[0].partition("#")
        dest = self.resolve(target, src)
        if dest is None:
            return "unresolved link [[%s]]" % raw
        if not sub or not dest.endswith(".md"):
            return None
        heads, blocks = self.anchors(dest)
        if sub.startswith("^"):
            return None if sub[1:] in blocks else "missing block ^%s in %s" % (sub[1:], dest)
        last = sub.split("#")[-1]
        return None if norm_heading(last) in heads else "missing heading #%s in %s" % (last, dest)


def read(path):
    return path.read_text(encoding="utf-8", errors="replace")


def code_free_lines(text):
    """Yield lines outside fenced code, with inline code spans removed."""
    fenced = False
    for line in text.split("\n"):
        if FENCE.match(line):
            fenced = not fenced
            continue
        if not fenced:
            yield INLINE_CODE.sub("", line)


def frontmatter_block(text):
    m = re.match(r"\A---\s*\n(.*?)\n---\s*(\n|\Z)", text, re.S)
    return m.group(1) if m else None


def yaml_load_many(docs):
    if not docs:
        return []
    out = subprocess.run(
        ["/usr/bin/ruby", "-e", RUBY_YAML], input=json.dumps(docs), capture_output=True, text=True, check=True
    )
    return json.loads(out.stdout)


def lint_markdown(v, rel, text, report):
    for line in code_free_lines(text):
        for raw in WIKILINK.findall(line):
            err = v.check_link(raw, rel)
            if err:
                report(rel, "error", "link", err)
    m = re.search(r"^source_count:\s*(\d+)\s*$", frontmatter_block(text) or "", re.M)
    if m and re.search(r"^note_type:\s*topic\s*$", frontmatter_block(text), re.M):
        body = text.split("\n---", 2)[-1]
        found = {v.resolve(raw.replace("\\|", "|").split("|")[0].split("#")[0], rel) for raw in WIKILINK.findall(body)}
        n = len({d for d in found if d and v.note_type(d) == "source"})
        if n != int(m.group(1)):
            report(rel, "warning", "frontmatter", "source_count %s but %d distinct source notes linked" % (m.group(1), n))
    if "```dataview" in text:
        for folder in DV_FROM.findall(text):
            if folder not in v.folders and folder.lower() not in v.by_path:
                report(rel, "error", "dataview", 'FROM "%s" matches no folder' % folder)


def lint_frontmatter(rels, texts, report):
    blocks = [(rel, frontmatter_block(t)) for rel, t in zip(rels, texts)]
    for rel, fm in blocks:
        if fm is None and rel.startswith("Research/") and "/Templates/" not in rel and not rel.endswith("AGENTS.md"):
            report(rel, "warning", "frontmatter", "no frontmatter block")
    present = [(rel, fm) for rel, fm in blocks if fm is not None]
    for (rel, _), res in zip(present, yaml_load_many([fm for _, fm in present])):
        if not res["ok"]:
            report(rel, "error", "frontmatter", "YAML: " + res["error"].splitlines()[0])
            continue
        data = res["data"] if isinstance(res["data"], dict) else {}
        tags = data.get("tags") or []
        if isinstance(tags, list):
            dupes = sorted({str(t) for t in tags if tags.count(t) > 1})
            if dupes:
                report(rel, "warning", "frontmatter", "duplicate tags: " + ", ".join(dupes))


def lint_base(v, rel, text, report):
    res = yaml_load_many([text])[0]
    if not res["ok"]:
        report(rel, "error", "base", "YAML: " + res["error"].splitlines()[0])
        return
    for folder in IN_FOLDER.findall(text):
        if folder not in v.folders:
            report(rel, "error", "base", 'file.inFolder("%s") matches no folder' % folder)


def boxes_overlap(a, b):
    return (a["x"] < b["x"] + b["width"] and b["x"] < a["x"] + a["width"]
            and a["y"] < b["y"] + b["height"] and b["y"] < a["y"] + a["height"])


def inside(a, g):
    return (g["x"] <= a["x"] and g["y"] <= a["y"]
            and a["x"] + a["width"] <= g["x"] + g["width"] and a["y"] + a["height"] <= g["y"] + g["height"])


def est_text_height(text, width):
    # ponytail: rough glyph model (16px body, 7.6px/char, 24px lines); catches gross overflow only.
    chars_per_line = max(8, int((width - 48) / 7.6))
    height = 40
    for line in text.split("\n"):
        m = HEADING.match(line)
        scale = {1: 2.0, 2: 1.6, 3: 1.35}.get(len(m.group(1)), 1.15) if m else 1.0
        body = m.group(2) if m else re.sub(r"^\s*([-*+]|\d+\.)\s+", "", line)
        body = re.sub(r"\[\[([^|\]]+\|)?([^\]]+)\]\]", r"\2", body)
        rows = max(1, -(-int(len(body) * scale) // chars_per_line))
        height += (rows * 24 * scale) if line.strip() else 10
    return height


def doubles_back(a, side, b):
    """True when an edge exits a side that faces away from its target (draws a loop)."""
    cx, cy = b["x"] + b["width"] / 2, b["y"] + b["height"] / 2
    return {
        "right": cx < a["x"] + a["width"],
        "left": cx > a["x"],
        "bottom": cy < a["y"] + a["height"],
        "top": cy > a["y"],
    }.get(side, False)


def lint_canvas(v, rel, text, report):
    try:
        data = json.loads(text)
    except ValueError as exc:
        report(rel, "error", "canvas", "invalid JSON: %s" % exc)
        return
    nodes, edges = data.get("nodes", []), data.get("edges", [])
    ids = [n.get("id") for n in nodes] + [e.get("id") for e in edges]
    for dup in sorted({str(i) for i in ids if ids.count(i) > 1}):
        report(rel, "error", "canvas", "duplicate id %s" % dup)
    by_id = {n.get("id"): n for n in nodes}
    for n in nodes:
        nid, kind = n.get("id"), n.get("type")
        if kind not in ("text", "file", "link", "group"):
            report(rel, "error", "canvas", "node %s has type %r" % (nid, kind))
        if any(not isinstance(n.get(k), int) for k in ("x", "y", "width", "height")):
            report(rel, "error", "canvas", "node %s geometry must be integers" % nid)
            continue
        if n.get("color") is not None and not PRESET_OR_HEX.match(str(n["color"])):
            report(rel, "error", "canvas", "node %s color %r" % (nid, n["color"]))
        if kind == "file":
            dest = n.get("file", "")
            if dest.lower() not in v.by_path:
                report(rel, "error", "canvas", "node %s file missing: %s" % (nid, dest))
            elif n.get("subpath"):
                err = v.check_link(dest + n["subpath"], rel)
                if err:
                    report(rel, "error", "canvas", "node %s: %s" % (nid, err))
        if kind == "text":
            body = n.get("text", "")
            if "\\n" in body:
                report(rel, "warning", "canvas", "node %s text has a literal \\n" % nid)
            for raw in WIKILINK.findall(body):
                err = v.check_link(raw, rel)
                if err:
                    report(rel, "error", "canvas", "node %s: %s" % (nid, err))
            need = est_text_height(body, n["width"])
            if need > n["height"] * 1.25:
                report(rel, "warning", "layout", "node %s text overflows (~%dpx content in %dpx card)" % (nid, need, n["height"]))
    cards = [n for n in nodes if n.get("type") != "group" and isinstance(n.get("x"), int)]
    groups = [n for n in nodes if n.get("type") == "group" and isinstance(n.get("x"), int)]
    for i, a in enumerate(cards):
        for b in cards[i + 1:]:
            if boxes_overlap(a, b):
                report(rel, "warning", "layout", "cards %s and %s overlap" % (a["id"], b["id"]))
        for g in groups:
            if boxes_overlap(a, g) and not inside(a, g):
                report(rel, "warning", "layout", "card %s straddles group %s border" % (a["id"], g["id"]))
    for i, g in enumerate(groups):
        for h in groups[i + 1:]:
            if boxes_overlap(g, h) and not inside(g, h) and not inside(h, g):
                report(rel, "warning", "layout", "groups %s and %s partially overlap" % (g["id"], h["id"]))
    for e in edges:
        eid = e.get("id")
        for end in ("fromNode", "toNode"):
            if e.get(end) not in by_id:
                report(rel, "error", "canvas", "edge %s %s %r missing" % (eid, end, e.get(end)))
        for key in ("fromSide", "toSide"):
            if e.get(key) is not None and e[key] not in SIDES:
                report(rel, "error", "canvas", "edge %s %s %r" % (eid, key, e[key]))
        for key in ("fromEnd", "toEnd"):
            if e.get(key) is not None and e[key] not in ENDS:
                report(rel, "error", "canvas", "edge %s %s %r" % (eid, key, e[key]))
        a, b = by_id.get(e.get("fromNode")), by_id.get(e.get("toNode"))
        bracket = e.get("fromSide") is not None and e.get("fromSide") == e.get("toSide")   # same-side arcs are deliberate
        if a and b and not bracket and isinstance(a.get("x"), int) and isinstance(b.get("x"), int) and doubles_back(a, e.get("fromSide"), b):
            report(rel, "warning", "layout", "edge %s leaves %s's %s side away from its target" % (eid, a["id"], e.get("fromSide")))


def lint(paths, v):
    findings = []

    def report(rel, level, kind, msg):
        findings.append({"file": rel, "level": level, "kind": kind, "message": msg})

    md = [(rel, read(ROOT / rel)) for rel in paths if rel.endswith(".md")]
    for rel, text in md:
        lint_markdown(v, rel, text, report)
    lint_frontmatter([r for r, _ in md], [t for _, t in md], report)
    for rel in paths:
        if rel.endswith(".canvas"):
            lint_canvas(v, rel, read(ROOT / rel), report)
        elif rel.endswith(".base"):
            lint_base(v, rel, read(ROOT / rel), report)
    return findings


def main(argv):
    v = Vault(ROOT)
    if argv[:1] == ["--hook"]:
        payload = json.load(sys.stdin)
        target = Path((payload.get("tool_input") or {}).get("file_path", "")).resolve()
        if ROOT not in target.parents or target.suffix not in (".md", ".canvas", ".base") or not target.exists():
            return 0
        rel = target.relative_to(ROOT).as_posix()
        if any(part in SKIP_DIRS for part in rel.split("/")):
            return 0
        errors = [f for f in lint([rel], v) if f["level"] == "error"]
        for f in errors:
            print("%s: %s" % (f["file"], f["message"]), file=sys.stderr)
        return 2 if errors else 0
    want_json = "--json" in argv
    args = [a for a in argv if a != "--json"]
    paths = [Path(a).resolve().relative_to(ROOT).as_posix() for a in args] if args else v.files
    findings = lint(paths, v)
    if want_json:
        print(json.dumps(findings, indent=1))
    else:
        groups = defaultdict(list)
        for f in findings:
            groups[(f["level"], f["kind"])].append(f)
        for (level, kind), items in sorted(groups.items()):
            print("\n%s/%s: %d" % (level, kind, len(items)))
            for f in items[:12]:
                print("  %s: %s" % (f["file"], f["message"]))
            if len(items) > 12:
                print("  ... %d more" % (len(items) - 12))
        errors = sum(f["level"] == "error" for f in findings)
        print("\n%d files · %d errors · %d warnings" % (len(paths), errors, len(findings) - errors))
    return 1 if any(f["level"] == "error" for f in findings) else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
