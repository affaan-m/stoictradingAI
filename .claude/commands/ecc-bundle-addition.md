---
name: ecc-bundle-addition
description: Workflow command scaffold for ecc-bundle-addition in stoictradingAI.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /ecc-bundle-addition

Use this workflow when working on **ecc-bundle-addition** in `stoictradingAI`.

## Goal

Adds a new ECC bundle for stoictradingAI, including documentation, rules, skills, tools, team config, research playbook, and agent configurations.

## Common Files

- `.claude/commands/command-documentation-addition.md`
- `.claude/commands/ecc-bundle-addition.md`
- `.claude/commands/feature-development.md`
- `.claude/rules/stoictradingAI-guardrails.md`
- `.claude/identity.json`
- `.claude/skills/stoictradingAI/SKILL.md`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Add or update .claude/commands/command-documentation-addition.md
- Add or update .claude/commands/ecc-bundle-addition.md
- Add or update .claude/commands/feature-development.md
- Add or update .claude/rules/stoictradingAI-guardrails.md
- Add or update .claude/identity.json

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.