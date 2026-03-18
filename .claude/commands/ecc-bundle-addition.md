---
name: ecc-bundle-addition
description: Workflow command scaffold for ecc-bundle-addition in stoictradingAI.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /ecc-bundle-addition

Use this workflow when working on **ecc-bundle-addition** in `stoictradingAI`.

## Goal

Adds a new ECC (Enterprise Control Center) bundle or configuration/documentation file for stoictradingAI, typically in .claude, .codex, or .agents directories.

## Common Files

- `.claude/commands/*.md`
- `.claude/enterprise/*.md`
- `.claude/team/*.json`
- `.claude/research/*.md`
- `.claude/rules/*.md`
- `.claude/skills/stoictradingAI/SKILL.md`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Create or update a file in .claude/commands, .claude/enterprise, .claude/team, .claude/research, .claude/rules, .claude/skills, .codex/agents, .codex, or .agents/skills/stoictradingAI.
- Commit the new or updated file with a message referencing 'ECC bundle'.

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.