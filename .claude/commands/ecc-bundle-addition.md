---
name: ecc-bundle-addition
description: Workflow command scaffold for ecc-bundle-addition in stoictradingAI.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /ecc-bundle-addition

Use this workflow when working on **ecc-bundle-addition** in `stoictradingAI`.

## Goal

Adds a new ECC (Enterprise Control Center) bundle for stoictradingAI, which includes configuration, skills, rules, research playbooks, commands, and agent definitions.

## Common Files

- `.claude/commands/*.md`
- `.claude/enterprise/controls.md`
- `.claude/team/stoictradingAI-team-config.json`
- `.claude/research/stoictradingAI-research-playbook.md`
- `.claude/rules/stoictradingAI-guardrails.md`
- `.claude/identity.json`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Create or update .claude/commands/*.md files (e.g., feature-development.md, monorepo-version-bump.md, multi-package-dependency-update.md, etc.)
- Create or update .claude/enterprise/controls.md
- Create or update .claude/team/stoictradingAI-team-config.json
- Create or update .claude/research/stoictradingAI-research-playbook.md
- Create or update .claude/rules/stoictradingAI-guardrails.md

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.