---
name: team-config-update
description: Workflow command scaffold for team-config-update in stoictradingAI.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /team-config-update

Use this workflow when working on **team-config-update** in `stoictradingAI`.

## Goal

Updates the team configuration for stoictradingAI.

## Common Files

- `.claude/team/stoictradingAI-team-config.json`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Edit .claude/team/stoictradingAI-team-config.json
- Commit with a message referencing ECC bundle or team config

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.