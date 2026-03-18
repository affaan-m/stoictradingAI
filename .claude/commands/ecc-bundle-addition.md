---
name: ecc-bundle-addition
description: Workflow command scaffold for ecc-bundle-addition in stoictradingAI.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /ecc-bundle-addition

Use this workflow when working on **ecc-bundle-addition** in `stoictradingAI`.

## Goal

Adds or updates the stoictradingAI ECC bundle by creating or modifying a consistent set of configuration, documentation, and skill files across the .claude, .codex, and .agents directories.

## Common Files

- `.claude/commands/team-config-update.md`
- `.claude/commands/ecc-bundle-addition.md`
- `.claude/commands/feature-development.md`
- `.claude/enterprise/controls.md`
- `.claude/team/stoictradingAI-team-config.json`
- `.claude/research/stoictradingAI-research-playbook.md`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Create or update .claude/commands/team-config-update.md
- Create or update .claude/commands/ecc-bundle-addition.md
- Create or update .claude/commands/feature-development.md
- Create or update .claude/enterprise/controls.md
- Create or update .claude/team/stoictradingAI-team-config.json

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.