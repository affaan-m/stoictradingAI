---
name: multi-package-dependency-update
description: Workflow command scaffold for multi-package-dependency-update in stoictradingAI.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /multi-package-dependency-update

Use this workflow when working on **multi-package-dependency-update** in `stoictradingAI`.

## Goal

Update dependencies across multiple package.json files in different packages, often using an automated tool like dependabot.

## Common Files

- `packages/*/package.json`
- `scripts/*/pnpm-lock.yaml`
- `pnpm-lock.yaml`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Update dependencies in package.json for affected packages
- Update lockfile (pnpm-lock.yaml or similar)
- Commit all changed package.json and lockfile files

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.