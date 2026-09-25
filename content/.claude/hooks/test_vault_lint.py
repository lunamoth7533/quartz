#!/usr/bin/env python3
"""Self-test for vault_lint.py: seeds each defect into a throwaway vault and checks it is caught.

    python3 .claude/hooks/test_vault_lint.py
"""
import json
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

HERE = Path(__file__).resolve().parent

NOTE_OK = "---\nnote_type: topic\ntags: [a]\n---\n# Target\n\n## Heading one\n\nClaim. ^blk-1\n"
NOTE_BAD = (
    "---\nnote_type: topic\ntags: [a, a]\n---\n# Bad\n\n"
    "[[Target#^blk-1]] [[Target#Heading one]] [[Target\\|alias]] `[[Ignored in code]]`\n"
    "[[Missing note]] [[Target#^nope]] [[Target#No heading]]\n"
)
CANVAS_BAD = {
    "nodes": [
        {"id": "a", "type": "text", "x": 0, "y": 0, "width": 200, "height": 100, "text": "[[Target]]"},
        {"id": "b", "type": "file", "x": 50, "y": 50, "width": 200, "height": 100, "file": "Research/Nope.md"},
        {"id": "g", "type": "group", "x": 100, "y": -20, "width": 400, "height": 300},
    ],
    "edges": [{"id": "e", "fromNode": "a", "fromSide": "right", "toNode": "zzz", "toSide": "left"}],
}


def run(root, *args, stdin=None):
    return subprocess.run([sys.executable, str(root / ".claude/hooks/vault_lint.py"), *args],
                          input=stdin, capture_output=True, text=True)


def main():
    root = Path(tempfile.mkdtemp())
    try:
        (root / ".claude/hooks").mkdir(parents=True)
        shutil.copy(HERE / "vault_lint.py", root / ".claude/hooks/vault_lint.py")
        (root / "Research").mkdir()
        (root / "Research/Target.md").write_text(NOTE_OK)
        (root / "Research/Bad.md").write_text(NOTE_BAD)
        (root / "Research/Bad.canvas").write_text(json.dumps(CANVAS_BAD))
        (root / "Research/Sources").mkdir()
        (root / "Research/Sources/S1.md").write_text("---\nnote_type: source\n---\n# S1\n")
        (root / "Research/Count.md").write_text("---\nnote_type: topic\nsource_count: 2\n---\n# Count\n\n[[S1]]\n")
        (root / "Research/Bad.base").write_text('filters:\n  and:\n    - file.inFolder("Research/Gone")\n')

        found = json.loads(run(root, "--json").stdout)
        msgs = "\n".join(f["message"] for f in found)
        for expected in ("unresolved link [[Missing note]]", "missing block ^nope", "missing heading #No heading",
                         "duplicate tags: a", "file missing: Research/Nope.md", "edge e toNode 'zzz' missing",
                         "cards a and b overlap", "source_count 2 but 1 distinct source", "straddles group g", 'inFolder("Research/Gone")'):
            assert expected in msgs, "not caught: " + expected
        assert "Ignored in code" not in msgs and "blk-1" not in msgs and "Heading one" not in msgs, "false positive:\n" + msgs

        hook = lambda path: run(root, "--hook", stdin=json.dumps({"tool_input": {"file_path": str(path)}}))
        assert hook(root / "Research/Bad.md").returncode == 2
        assert hook(root / "Research/Target.md").returncode == 0
        assert hook(Path("/tmp/elsewhere.md")).returncode == 0
        print("vault_lint selftest passed")
    finally:
        shutil.rmtree(root)


if __name__ == "__main__":
    main()
