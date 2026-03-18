---
name: stoictradingai-conventions
description: Development conventions and patterns for stoictradingAI. TypeScript project with freeform commits.
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

### Commit Style: Free-form Messages

### Prefixes Used

- `feat`
- `chore`
- `fix`

### Message Guidelines

- Average message length: ~48 characters
- Keep first line concise and descriptive
- Use imperative mood ("Add feature" not "Added feature")


*Commit message example*

```text
feat: add stoictradingAI ECC bundle (.claude/commands/multi-package-dependency-update.md)
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
feat: add stoictradingAI ECC bundle (.claude/commands/monorepo-version-bump.md)
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

**Frequency**: ~20 times per month

**Steps**:
1. Add feature implementation
2. Add tests for feature
3. Update documentation

**Files typically involved**:
- `packages/plugin-solana/src/actions/*`

**Example commit sequence**:
```
feat: update trading bot with transaction explorer URL and stoic quotes
Initial commit
chore(deps): bump the npm_and_yarn group across 8 directories with 10 updates
```

### Ecc Bundle Addition

Adds a new ECC (Enterprise Control Center) bundle or configuration/documentation file for stoictradingAI, typically in .claude, .codex, or .agents directories.

**Frequency**: ~10 times per month

**Steps**:
1. Create or update a file in .claude/commands, .claude/enterprise, .claude/team, .claude/research, .claude/rules, .claude/skills, .codex/agents, .codex, or .agents/skills/stoictradingAI.
2. Commit the new or updated file with a message referencing 'ECC bundle'.

**Files typically involved**:
- `.claude/commands/*.md`
- `.claude/enterprise/*.md`
- `.claude/team/*.json`
- `.claude/research/*.md`
- `.claude/rules/*.md`
- `.claude/skills/stoictradingAI/SKILL.md`
- `.claude/ecc-tools.json`
- `.claude/identity.json`
- `.claude/homunculus/instincts/inherited/*.yaml`
- `.codex/agents/*.toml`
- `.codex/AGENTS.md`
- `.codex/config.toml`
- `.agents/skills/stoictradingAI/SKILL.md`
- `.agents/skills/stoictradingAI/agents/*.yaml`

**Example commit sequence**:
```
Create or update a file in .claude/commands, .claude/enterprise, .claude/team, .claude/research, .claude/rules, .claude/skills, .codex/agents, .codex, or .agents/skills/stoictradingAI.
Commit the new or updated file with a message referencing 'ECC bundle'.
```

### Monorepo Version Bump

Bumps the version across multiple package.json files in a monorepo, including lerna.json and lock files.

**Frequency**: ~2 times per month

**Steps**:
1. Update the version in all package.json files under packages/ and root-level package.json files.
2. Update lerna.json version.
3. Commit all updated package.json and lerna.json files, often with a 'bump version' message.

**Files typically involved**:
- `agent/package.json`
- `client/package.json`
- `docs/package.json`
- `lerna.json`
- `packages/*/package.json`

**Example commit sequence**:
```
Update the version in all package.json files under packages/ and root-level package.json files.
Update lerna.json version.
Commit all updated package.json and lerna.json files, often with a 'bump version' message.
```

### Multi Package Dependency Update

Updates dependencies across multiple package.json files, often as a result of automated tools like dependabot.

**Frequency**: ~2 times per month

**Steps**:
1. Update dependencies in package.json files across multiple packages.
2. Update lock files if necessary (e.g., pnpm-lock.yaml).
3. Commit all updated files with a detailed changelog in the commit message.

**Files typically involved**:
- `packages/*/package.json`
- `scripts/*/pnpm-lock.yaml`
- `pnpm-lock.yaml`

**Example commit sequence**:
```
Update dependencies in package.json files across multiple packages.
Update lock files if necessary (e.g., pnpm-lock.yaml).
Commit all updated files with a detailed changelog in the commit message.
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
