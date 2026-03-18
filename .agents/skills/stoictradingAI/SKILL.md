---
name: stoictradingai-conventions
description: Development conventions and patterns for stoictradingAI. TypeScript project with mixed commits.
---

# Stoictradingai Conventions

> Generated from [affaan-m/stoictradingAI](https://github.com/affaan-m/stoictradingAI) on 2026-03-18

## Overview

This skill teaches Claude the development patterns and conventions used in stoictradingAI.

## Tech Stack

- **Primary Language**: TypeScript
- **Architecture**: type-based module organization
- **Test Location**: mixed
- **Test Framework**: vitest

## When to Use This Skill

Activate this skill when:
- Making changes to this repository
- Adding new features following established patterns
- Writing tests that match project conventions
- Creating commits with proper message format

## Commit Conventions

Follow these commit message conventions based on 500 analyzed commits.

### Commit Style: Mixed Style

### Prefixes Used

- `feat`
- `chore`
- `fix`

### Message Guidelines

- Average message length: ~54 characters
- Keep first line concise and descriptive
- Use imperative mood ("Add feature" not "Added feature")


*Commit message example*

```text
feat: add stoictradingAI ECC bundle (.claude/commands/team-config-update.md)
```

*Commit message example*

```text
chore(deps): bump the npm_and_yarn group across 8 directories with 10 updates
```

*Commit message example*

```text
fix: unused variable
```

*Commit message example*

```text
lint: fix EmbeddingProvider already defined error (via claude)
```

*Commit message example*

```text
revert: packages/client-github/src/index.ts to match develop
```

*Commit message example*

```text
feat: add stoictradingAI ECC bundle (.claude/commands/ecc-bundle-addition.md)
```

*Commit message example*

```text
feat: add stoictradingAI ECC bundle (.claude/commands/feature-development.md)
```

*Commit message example*

```text
feat: add stoictradingAI ECC bundle (.claude/enterprise/controls.md)
```

## Architecture

### Project Structure: Turborepo

This project uses **type-based** module organization.

### Configuration Files

- `.eslintrc.json`
- `.github/workflows/codeql.yml`
- `.github/workflows/generate-changelog.yml`
- `.github/workflows/generate-readme-translations.yml`
- `.github/workflows/greetings.yml`
- `.github/workflows/jsdoc-automation.yml`
- `.github/workflows/pre-release.yml`
- `.github/workflows/require-develop.yml`
- `.github/workflows/smoke-tests.yml`
- `.github/workflows/stale.yml`
- `Dockerfile`
- `agent/jest.config.js`
- `agent/package.json`
- `agent/tsconfig.json`
- `client/eslint.config.js`
- `client/package.json`
- `client/tailwind.config.js`
- `client/tsconfig.json`
- `client/vite.config.ts`
- `docs/package.json`
- `package.json`
- `packages/_examples/plugin/package.json`
- `packages/_examples/plugin/tsconfig.json`
- `packages/adapter-postgres/package.json`
- `packages/adapter-postgres/tsconfig.json`
- `packages/adapter-redis/package.json`
- `packages/adapter-redis/tsconfig.json`
- `packages/adapter-sqlite/package.json`
- `packages/adapter-sqlite/tsconfig.json`
- `packages/adapter-sqljs/package.json`
- `packages/adapter-sqljs/tsconfig.json`
- `packages/adapter-supabase/package.json`
- `packages/adapter-supabase/tsconfig.json`
- `packages/client-auto/package.json`
- `packages/client-auto/tsconfig.json`
- `packages/client-direct/package.json`
- `packages/client-direct/tsconfig.json`
- `packages/client-discord/package.json`
- `packages/client-discord/tsconfig.json`
- `packages/client-farcaster/package.json`
- `packages/client-farcaster/tsconfig.json`
- `packages/client-github/package.json`
- `packages/client-github/tsconfig.json`
- `packages/client-lens/package.json`
- `packages/client-lens/tsconfig.json`
- `packages/client-slack/jest.config.js`
- `packages/client-slack/package.json`
- `packages/client-slack/tsconfig.json`
- `packages/client-telegram/package.json`
- `packages/client-telegram/tsconfig.json`
- `packages/client-twitter/package.json`
- `packages/client-twitter/tsconfig.json`
- `packages/core/package.json`
- `packages/core/tsconfig.json`
- `packages/core/vitest.config.ts`
- `packages/create-eliza-app/package.json`
- `packages/create-eliza-app/tsconfig.json`
- `packages/plugin-0g/package.json`
- `packages/plugin-0g/tsconfig.json`
- `packages/plugin-3d-generation/package.json`
- `packages/plugin-3d-generation/tsconfig.json`
- `packages/plugin-abstract/package.json`
- `packages/plugin-abstract/tsconfig.json`
- `packages/plugin-aptos/package.json`
- `packages/plugin-aptos/tsconfig.json`
- `packages/plugin-avalanche/package.json`
- `packages/plugin-avalanche/tsconfig.json`
- `packages/plugin-bootstrap/package.json`
- `packages/plugin-bootstrap/tsconfig.json`
- `packages/plugin-coinbase/advanced-sdk-ts/.eslintrc.js`
- `packages/plugin-coinbase/advanced-sdk-ts/.prettierrc`
- `packages/plugin-coinbase/advanced-sdk-ts/package.json`
- `packages/plugin-coinbase/advanced-sdk-ts/tsconfig.json`
- `packages/plugin-coinbase/package.json`
- `packages/plugin-coinbase/tsconfig.json`
- `packages/plugin-conflux/package.json`
- `packages/plugin-conflux/tsconfig.json`
- `packages/plugin-cronoszkevm/package.json`
- `packages/plugin-cronoszkevm/tsconfig.json`
- `packages/plugin-echochambers/package.json`
- `packages/plugin-echochambers/tsconfig.json`
- `packages/plugin-evm/package.json`
- `packages/plugin-evm/tsconfig.json`
- `packages/plugin-ferePro/package.json`
- `packages/plugin-ferePro/tsconfig.json`
- `packages/plugin-flow/package.json`
- `packages/plugin-flow/tsconfig.json`
- `packages/plugin-flow/vitest.config.ts`
- `packages/plugin-fuel/package.json`
- `packages/plugin-fuel/tsconfig.json`
- `packages/plugin-gitbook/package.json`
- `packages/plugin-gitbook/tsconfig.json`
- `packages/plugin-goat/package.json`
- `packages/plugin-goat/tsconfig.json`
- `packages/plugin-icp/package.json`
- `packages/plugin-icp/tsconfig.json`
- `packages/plugin-image-generation/package.json`
- `packages/plugin-image-generation/tsconfig.json`
- `packages/plugin-intiface/package.json`
- `packages/plugin-intiface/tsconfig.json`
- `packages/plugin-multiversx/package.json`
- `packages/plugin-multiversx/tsconfig.json`
- `packages/plugin-near/package.json`
- `packages/plugin-near/tsconfig.json`
- `packages/plugin-nft-generation/package.json`
- `packages/plugin-nft-generation/tsconfig.json`
- `packages/plugin-node/package.json`
- `packages/plugin-node/tsconfig.json`
- `packages/plugin-solana/package.json`
- `packages/plugin-solana/tsconfig.json`
- `packages/plugin-starknet/package.json`
- `packages/plugin-starknet/tsconfig.json`
- `packages/plugin-story/package.json`
- `packages/plugin-story/tsconfig.json`
- `packages/plugin-sui/package.json`
- `packages/plugin-sui/tsconfig.json`
- `packages/plugin-tee/package.json`
- `packages/plugin-tee/tsconfig.json`
- `packages/plugin-ton/package.json`
- `packages/plugin-ton/tsconfig.json`
- `packages/plugin-trustdb/package.json`
- `packages/plugin-trustdb/tsconfig.json`
- `packages/plugin-twitter/package.json`
- `packages/plugin-twitter/tsconfig.json`
- `packages/plugin-video-generation/package.json`
- `packages/plugin-video-generation/tsconfig.json`
- `packages/plugin-web-search/package.json`
- `packages/plugin-web-search/tsconfig.json`
- `packages/plugin-whatsapp/package.json`
- `packages/plugin-whatsapp/tsconfig.json`
- `packages/plugin-zksync-era/package.json`
- `packages/plugin-zksync-era/tsconfig.json`
- `scripts/jsdoc-automation/package.json`
- `scripts/jsdoc-automation/tsconfig.json`
- `tsconfig.json`

### Guidelines

- Group code by type (components, services, utils)
- Keep related functionality in the same type folder
- Avoid circular dependencies between type folders

## Code Style

### Language: TypeScript

### Naming Conventions

| Element | Convention |
|---------|------------|
| Files | camelCase |
| Functions | camelCase |
| Classes | PascalCase |
| Constants | SCREAMING_SNAKE_CASE |

### Import Style: Path Aliases (@/, ~/)

### Export Style: Mixed Style


*Preferred import style*

```typescript
// Use path aliases for imports
import { Button } from '@/components/Button'
import { useAuth } from '@/hooks/useAuth'
import { api } from '@/lib/api'
```

## Testing

### Test Framework: vitest

### File Pattern: `*.test.ts`

### Test Types

- **Unit tests**: Test individual functions and components in isolation
- **Integration tests**: Test interactions between multiple components/services

### Mocking: jest.mock


*Test file structure*

```typescript
import { describe, it, expect } from 'vitest'

describe('MyFunction', () => {
  it('should return expected result', () => {
    const result = myFunction(input)
    expect(result).toBe(expected)
  })
})
```

## Error Handling

### Error Handling Style: Try-Catch Blocks


*Standard error handling pattern*

```typescript
try {
  const result = await riskyOperation()
  return result
} catch (error) {
  console.error('Operation failed:', error)
  throw new Error('User-friendly message')
}
```

## Common Workflows

These workflows were detected from analyzing commit patterns.

### Feature Development

Standard feature implementation workflow

**Frequency**: ~30 times per month

**Steps**:
1. Add feature implementation
2. Add tests for feature
3. Update documentation

**Example commit sequence**:
```
feat: add stoictradingAI ECC bundle (.codex/agents/docs-researcher.toml)
feat: add stoictradingAI ECC bundle (.claude/research/stoictradingAI-research-playbook.md)
feat: add stoictradingAI ECC bundle (.claude/rules/stoictradingAI-guardrails.md)
```

### Ecc Bundle Addition

Adds a new ECC (Enterprise Control Center) bundle for stoictradingAI, updating commands, configuration, skills, rules, tools, and agent definitions.

**Frequency**: ~3 times per month

**Steps**:
1. Add or update .claude/commands/ecc-bundle-addition.md
2. Add or update .claude/commands/team-config-update.md
3. Add or update .claude/commands/feature-development.md
4. Add or update .claude/enterprise/controls.md
5. Add or update .claude/team/stoictradingAI-team-config.json
6. Add or update .claude/research/stoictradingAI-research-playbook.md
7. Add or update .claude/rules/stoictradingAI-guardrails.md
8. Add or update .claude/identity.json
9. Add or update .claude/skills/stoictradingAI/SKILL.md
10. Add or update .claude/ecc-tools.json
11. Add or update .agents/skills/stoictradingAI/SKILL.md
12. Add or update .agents/skills/stoictradingAI/agents/openai.yaml
13. Add or update .codex/agents/docs-researcher.toml
14. Add or update .codex/agents/reviewer.toml
15. Add or update .codex/agents/explorer.toml

**Files typically involved**:
- `.claude/commands/ecc-bundle-addition.md`
- `.claude/commands/team-config-update.md`
- `.claude/commands/feature-development.md`
- `.claude/enterprise/controls.md`
- `.claude/team/stoictradingAI-team-config.json`
- `.claude/research/stoictradingAI-research-playbook.md`
- `.claude/rules/stoictradingAI-guardrails.md`
- `.claude/identity.json`
- `.claude/skills/stoictradingAI/SKILL.md`
- `.claude/ecc-tools.json`
- `.agents/skills/stoictradingAI/SKILL.md`
- `.agents/skills/stoictradingAI/agents/openai.yaml`
- `.codex/agents/docs-researcher.toml`
- `.codex/agents/reviewer.toml`
- `.codex/agents/explorer.toml`

**Example commit sequence**:
```
Add or update .claude/commands/ecc-bundle-addition.md
Add or update .claude/commands/team-config-update.md
Add or update .claude/commands/feature-development.md
Add or update .claude/enterprise/controls.md
Add or update .claude/team/stoictradingAI-team-config.json
Add or update .claude/research/stoictradingAI-research-playbook.md
Add or update .claude/rules/stoictradingAI-guardrails.md
Add or update .claude/identity.json
Add or update .claude/skills/stoictradingAI/SKILL.md
Add or update .claude/ecc-tools.json
Add or update .agents/skills/stoictradingAI/SKILL.md
Add or update .agents/skills/stoictradingAI/agents/openai.yaml
Add or update .codex/agents/docs-researcher.toml
Add or update .codex/agents/reviewer.toml
Add or update .codex/agents/explorer.toml
```

### Team Config Update

Updates the team configuration for stoictradingAI, often alongside ECC bundle or guardrails changes.

**Frequency**: ~3 times per month

**Steps**:
1. Edit .claude/team/stoictradingAI-team-config.json
2. Optionally update related guardrails, commands, or research playbooks

**Files typically involved**:
- `.claude/team/stoictradingAI-team-config.json`

**Example commit sequence**:
```
Edit .claude/team/stoictradingAI-team-config.json
Optionally update related guardrails, commands, or research playbooks
```

### Guardrails Update

Updates the guardrails (rules) for stoictradingAI, typically as part of a broader ECC bundle update.

**Frequency**: ~3 times per month

**Steps**:
1. Edit .claude/rules/stoictradingAI-guardrails.md

**Files typically involved**:
- `.claude/rules/stoictradingAI-guardrails.md`

**Example commit sequence**:
```
Edit .claude/rules/stoictradingAI-guardrails.md
```

### Research Playbook Update

Adds or updates the research playbook for stoictradingAI.

**Frequency**: ~3 times per month

**Steps**:
1. Edit .claude/research/stoictradingAI-research-playbook.md

**Files typically involved**:
- `.claude/research/stoictradingAI-research-playbook.md`

**Example commit sequence**:
```
Edit .claude/research/stoictradingAI-research-playbook.md
```

### Ecc Skill Documentation Update

Adds or updates SKILL.md documentation for stoictradingAI skills in both .claude and .agents directories.

**Frequency**: ~3 times per month

**Steps**:
1. Edit .claude/skills/stoictradingAI/SKILL.md
2. Edit .agents/skills/stoictradingAI/SKILL.md

**Files typically involved**:
- `.claude/skills/stoictradingAI/SKILL.md`
- `.agents/skills/stoictradingAI/SKILL.md`

**Example commit sequence**:
```
Edit .claude/skills/stoictradingAI/SKILL.md
Edit .agents/skills/stoictradingAI/SKILL.md
```

### Codex Agent Update

Adds or updates codex agent TOML files for docs-researcher, reviewer, and explorer agents.

**Frequency**: ~3 times per month

**Steps**:
1. Edit .codex/agents/docs-researcher.toml
2. Edit .codex/agents/reviewer.toml
3. Edit .codex/agents/explorer.toml

**Files typically involved**:
- `.codex/agents/docs-researcher.toml`
- `.codex/agents/reviewer.toml`
- `.codex/agents/explorer.toml`

**Example commit sequence**:
```
Edit .codex/agents/docs-researcher.toml
Edit .codex/agents/reviewer.toml
Edit .codex/agents/explorer.toml
```


## Best Practices

Based on analysis of the codebase, follow these practices:

### Do

- Write tests using vitest
- Follow *.test.ts naming pattern
- Use camelCase for file names
- Prefer mixed exports

### Don't

- Don't use long relative imports (use aliases)
- Don't skip tests for new features
- Don't deviate from established patterns without discussion

---

*This skill was auto-generated by [ECC Tools](https://ecc.tools). Review and customize as needed for your team.*
