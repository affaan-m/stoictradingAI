---
name: monorepo-version-bump
description: Workflow command scaffold for monorepo-version-bump in stoictradingAI.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /monorepo-version-bump

Use this workflow when working on **monorepo-version-bump** in `stoictradingAI`.

## Goal

Bump the version across all packages in the monorepo, usually for a new release or pre-release.

## Common Files

- `agent/package.json`
- `client/package.json`
- `docs/package.json`
- `lerna.json`
- `packages/*/package.json`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Update the version in package.json for all packages (agent, client, docs, all packages in packages/)
- Update lerna.json with the new version
- Commit all updated package.json and lerna.json files

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.