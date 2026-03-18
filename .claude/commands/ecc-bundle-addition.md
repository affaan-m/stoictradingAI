---
name: ecc-bundle-addition
description: Workflow command scaffold for ecc-bundle-addition in stoictradingAI.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /ecc-bundle-addition

Use this workflow when working on **ecc-bundle-addition** in `stoictradingAI`.

## Goal

Adds or updates the stoictradingAI ECC bundle, including commands, rules, skills, team config, research playbook, and agent definitions.

## Common Files

- `.claude/commands/*.md`
- `.claude/rules/stoictradingAI-guardrails.md`
- `.claude/skills/stoictradingAI/SKILL.md`
- `.agents/skills/stoictradingAI/SKILL.md`
- `.claude/identity.json`
- `.claude/ecc-tools.json`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Add or update .claude/commands/*.md files (such as feature-development.md, monorepo-version-bump.md, multi-package-dependency-update.md, ecc-bundle-addition.md, dependency-update-multi-package.md, monorepo-version-bump-release.md)
- Add or update .claude/rules/stoictradingAI-guardrails.md
- Add or update .claude/skills/stoictradingAI/SKILL.md and/or .agents/skills/stoictradingAI/SKILL.md
- Add or update .claude/identity.json
- Add or update .claude/ecc-tools.json

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.