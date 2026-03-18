---
name: monorepo-version-bump-release
description: Workflow command scaffold for monorepo-version-bump-release in stoictradingAI.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /monorepo-version-bump-release

Use this workflow when working on **monorepo-version-bump-release** in `stoictradingAI`.

## Goal

Bumps the version number for all packages in the monorepo, often as part of a release process.

## Common Files

- `packages/*/package.json`
- `lerna.json`
- `agent/package.json`
- `client/package.json`
- `docs/package.json`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Update version numbers in all package.json files in packages/*.
- Update root configuration files (e.g., lerna.json).
- Commit all changes with a version bump message.

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.