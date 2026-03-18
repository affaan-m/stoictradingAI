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

- `chore`
- `fix`
- `feat`

### Message Guidelines

- Average message length: ~45 characters
- Keep first line concise and descriptive
- Use imperative mood ("Add feature" not "Added feature")


*Commit message example*

```text
chore(deps): bump the npm_and_yarn group across 8 directories with 10 updates
```

*Commit message example*

```text
feat: update trading bot with transaction explorer URL and stoic quotes
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
Initial commit
```

*Commit message example*

```text
Adjusted trading logic and post on tweeter after making a trade
```

*Commit message example*

```text
Tested autonomous behavior, fixed issue  and added delays
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

**Frequency**: ~5 times per month

**Steps**:
1. Add feature implementation
2. Add tests for feature
3. Update documentation

**Files typically involved**:
- `packages/client-direct/src/*`
- `agent/src/*`
- `packages/core/src/*`
- `**/api/**`

**Example commit sequence**:
```
Add Livepeer model and configuration details to documentation
Update package.json with build-docker command
feat: add /:agentId/speak endpoint for text-to-speech functionality
```

### Dependency Update Multi Package

Updates dependencies across multiple package.json files in various packages, often via automated tools like dependabot.

**Frequency**: ~2 times per month

**Steps**:
1. Identify outdated dependencies in multiple packages.
2. Update version numbers in each affected package.json.
3. Update lock files (e.g., pnpm-lock.yaml).
4. Commit all changes with a summary of updated dependencies.

**Files typically involved**:
- `packages/*/package.json`
- `pnpm-lock.yaml`
- `scripts/*/pnpm-lock.yaml`

**Example commit sequence**:
```
Identify outdated dependencies in multiple packages.
Update version numbers in each affected package.json.
Update lock files (e.g., pnpm-lock.yaml).
Commit all changes with a summary of updated dependencies.
```

### Monorepo Version Bump Release

Bumps the version number for all packages in the monorepo, often as part of a release process.

**Frequency**: ~1 times per month

**Steps**:
1. Update version numbers in all package.json files in packages/*.
2. Update root configuration files (e.g., lerna.json).
3. Commit all changes with a version bump message.

**Files typically involved**:
- `packages/*/package.json`
- `lerna.json`
- `agent/package.json`
- `client/package.json`
- `docs/package.json`

**Example commit sequence**:
```
Update version numbers in all package.json files in packages/*.
Update root configuration files (e.g., lerna.json).
Commit all changes with a version bump message.
```

### Merge Develop To Main Release

Merges the develop branch into main, bringing all accumulated changes, including docs, configs, and code, into production.

**Frequency**: ~2 times per month

**Steps**:
1. Merge develop into main.
2. Resolve any conflicts.
3. Update documentation and configuration files as needed.
4. Commit the merge with a summary message.

**Files typically involved**:
- `.env.example`
- `.github/workflows/*`
- `agent/*`
- `client/*`
- `docs/*`
- `packages/*`
- `pnpm-lock.yaml`

**Example commit sequence**:
```
Merge develop into main.
Resolve any conflicts.
Update documentation and configuration files as needed.
Commit the merge with a summary message.
```

### Add Or Update Feature In Plugin

Implements or updates a feature in a plugin package, often involving multiple files within the plugin and sometimes related documentation.

**Frequency**: ~2 times per month

**Steps**:
1. Edit or add files in packages/plugin-*/src/actions/ and related providers or utils.
2. Update package.json if dependencies or scripts change.
3. Optionally update documentation or configuration.
4. Commit changes with a descriptive message.

**Files typically involved**:
- `packages/plugin-*/src/actions/*.ts`
- `packages/plugin-*/src/providers/*.ts`
- `packages/plugin-*/src/index.ts`
- `packages/plugin-*/package.json`

**Example commit sequence**:
```
Edit or add files in packages/plugin-*/src/actions/ and related providers or utils.
Update package.json if dependencies or scripts change.
Optionally update documentation or configuration.
Commit changes with a descriptive message.
```

### Add Or Update Api Endpoint

Adds or updates an API endpoint in a client package, typically by modifying the src/index.ts or similar entrypoint.

**Frequency**: ~2 times per month

**Steps**:
1. Edit or add endpoint logic in packages/client-*/src/index.ts.
2. Add error handling and response formatting.
3. Commit with a message describing the endpoint.

**Files typically involved**:
- `packages/client-*/src/index.ts`

**Example commit sequence**:
```
Edit or add endpoint logic in packages/client-*/src/index.ts.
Add error handling and response formatting.
Commit with a message describing the endpoint.
```

### Documentation And Config Update For New Feature

Updates documentation and configuration files to reflect new models, providers, or features.

**Frequency**: ~2 times per month

**Steps**:
1. Update docs/api/enumerations/ModelProviderName.md and related docs.
2. Edit docs/docs/guides/configuration.md and docs/docs/quickstart.md.
3. Commit with a message summarizing the documentation update.

**Files typically involved**:
- `docs/api/enumerations/ModelProviderName.md`
- `docs/api/type-aliases/Models.md`
- `docs/docs/api/enumerations/ModelProviderName.md`
- `docs/docs/api/type-aliases/Models.md`
- `docs/docs/guides/configuration.md`
- `docs/docs/quickstart.md`

**Example commit sequence**:
```
Update docs/api/enumerations/ModelProviderName.md and related docs.
Edit docs/docs/guides/configuration.md and docs/docs/quickstart.md.
Commit with a message summarizing the documentation update.
```

### Linting And Code Cleanup

Performs code cleanup for linting, such as changing let to const, removing unused variables/imports, or adding eslint support.

**Frequency**: ~2 times per month

**Steps**:
1. Identify linting issues (e.g., unused vars, let/const).
2. Apply fixes across relevant files.
3. Add or update eslint configuration if needed.
4. Commit with a message describing the cleanup.

**Files typically involved**:
- `packages/*/src/**/*.ts`
- `packages/*/eslint.config.mjs`
- `packages/*/package.json`

**Example commit sequence**:
```
Identify linting issues (e.g., unused vars, let/const).
Apply fixes across relevant files.
Add or update eslint configuration if needed.
Commit with a message describing the cleanup.
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
