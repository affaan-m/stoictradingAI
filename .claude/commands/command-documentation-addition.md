---
name: command-documentation-addition
description: Workflow command scaffold for command-documentation-addition in stoictradingAI.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /command-documentation-addition

Use this workflow when working on **command-documentation-addition** in `stoictradingAI`.

## Goal

Adds or updates markdown documentation for ECC-related commands.

## Common Files

- `.claude/commands/*.md`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Create or update a markdown file in .claude/commands/ (e.g., feature-development.md, monorepo-version-bump.md, multi-package-dependency-update.md, ecc-bundle-addition.md, dependency-update-multi-package.md, monorepo-version-bump-release.md)

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.