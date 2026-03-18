---
name: multi-package-dependency-update
description: Workflow command scaffold for multi-package-dependency-update in stoictradingAI.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /multi-package-dependency-update

Use this workflow when working on **multi-package-dependency-update** in `stoictradingAI`.

## Goal

Updates dependencies across multiple package.json files in a monorepo, typically using an automated tool like Dependabot.

## Common Files

- `packages/*/package.json`
- `scripts/*/pnpm-lock.yaml`
- `scripts/*/yarn.lock`
- `scripts/*/package-lock.json`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Identify outdated dependencies across multiple packages.
- Update package.json files in each affected package directory.
- Update lock files (e.g., pnpm-lock.yaml, yarn.lock, package-lock.json) as needed.
- Commit all changes with a detailed message listing updated dependencies and versions.

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.