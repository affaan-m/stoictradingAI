---
name: dependency-update-multi-package
description: Workflow command scaffold for dependency-update-multi-package in stoictradingAI.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /dependency-update-multi-package

Use this workflow when working on **dependency-update-multi-package** in `stoictradingAI`.

## Goal

Updates dependencies across multiple package.json files in various packages, often via automated tools like dependabot.

## Common Files

- `packages/*/package.json`
- `pnpm-lock.yaml`
- `scripts/*/pnpm-lock.yaml`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Identify outdated dependencies in multiple packages.
- Update version numbers in each affected package.json.
- Update lock files (e.g., pnpm-lock.yaml).
- Commit all changes with a summary of updated dependencies.

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.