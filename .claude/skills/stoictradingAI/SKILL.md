# stoictradingAI Development Patterns

> Auto-generated skill from repository analysis

## Overview

stoictradingAI is a TypeScript-based monorepo that implements autonomous trading AI functionality, with a focus on Solana blockchain integration. The codebase follows a plugin-based architecture where different blockchains and services are implemented as separate packages. The repository emphasizes clean code practices, consistent versioning across packages, and iterative enhancement of trading capabilities.

## Coding Conventions

### File Naming
- Use **camelCase** for all TypeScript files
- Test files follow the pattern `*.test.ts`
- Configuration files use standard naming (`package.json`, `tsconfig.json`, etc.)

### Import Style
```typescript
// Use import aliases for cleaner code
import { SolanaProvider } from '@plugin/solana';
import type { TradingAction } from '@types/trading';
```

### Export Style
```typescript
// Mixed export patterns - both named and default exports
export class TradingBot { }
export const config = { };
export default SolanaPlugin;
```

### Commit Messages
- Use conventional commit prefixes: `feat:`, `fix:`, `chore:`
- Keep messages concise (average ~45 characters)
- Examples: `feat: add new trading action`, `fix: resolve token balance issue`

## Workflows

### Dependency Updates
**Trigger:** When Dependabot detects outdated dependencies
**Command:** `/update-deps`

1. Detect outdated dependencies across all packages
2. Update `package.json` files in affected packages
3. Update `pnpm-lock.yaml` with new versions
4. Commit with detailed changelog noting all updated packages

```bash
# Example files involved:
packages/*/package.json
pnpm-lock.yaml
```

### Version Bump
**Trigger:** When preparing a new release
**Command:** `/bump-version`

1. Update version in `lerna.json`
2. Synchronize versions across all `package.json` files:
   - `packages/*/package.json`
   - `agent/package.json`
   - `client/package.json` 
   - `docs/package.json`
3. Commit version changes with consistent message format

### Plugin Development
**Trigger:** When adding support for a new blockchain or service
**Command:** `/new-plugin`

1. Create new plugin directory: `packages/plugin-[name]/`
2. Set up standard plugin structure:
   ```
   packages/plugin-[name]/
   ├── src/
   │   ├── actions/
   │   └── providers/
   ├── package.json
   └── tsconfig.json
   ```
3. Implement actions in `src/actions/*.ts`
4. Implement providers in `src/providers/*.ts`
5. Configure TypeScript compilation
6. Set up build tools and dependencies

### Trading Bot Enhancement
**Trigger:** When enhancing trading capabilities or fixing trading logic
**Command:** `/enhance-trading`

1. Modify trading actions in `packages/plugin-solana/src/actions/`
2. Update Solana providers in `packages/plugin-solana/src/providers/`
3. Adjust token handling and balance management
4. Test autonomous behavior with character configurations
5. Update character files: `characters/*.character.json`

### Merge Develop to Main
**Trigger:** When preparing releases or major updates
**Command:** `/merge-release`

1. Merge develop branch changes to main
2. Resolve any merge conflicts
3. Update documentation in `docs/api/**/*.md`
4. Update API references and examples
5. Refresh `.env.example` with new configuration options

### Code Cleanup
**Trigger:** When improving code quality and consistency
**Command:** `/cleanup-code`

1. Replace `console.log` statements with `elizaLogger`
2. Fix unused variable warnings
3. Update `let` declarations to `const` where appropriate
4. Add or update `eslint.config.mjs` files
5. Run linting across all packages

```typescript
// Before cleanup:
console.log("Trading action executed");
let balance = getBalance();

// After cleanup:
elizaLogger.info("Trading action executed");
const balance = getBalance();
```

## Testing Patterns

### Framework
- **vitest** is used as the testing framework
- Test files use the pattern `*.test.ts`

### Test Structure
```typescript
// Example test pattern
import { describe, it, expect } from 'vitest';
import { TradingAction } from './tradingAction';

describe('TradingAction', () => {
  it('should execute trade successfully', () => {
    const action = new TradingAction();
    const result = action.execute();
    expect(result).toBeDefined();
  });
});
```

## Commands

| Command | Purpose |
|---------|---------|
| `/update-deps` | Bulk update dependencies across monorepo packages |
| `/bump-version` | Synchronize version bumps across all packages |
| `/new-plugin` | Create new blockchain/service plugin with standard structure |
| `/enhance-trading` | Improve Solana trading functionality and autonomous behavior |
| `/merge-release` | Merge develop to main and update documentation |
| `/cleanup-code` | Standardize code quality with linting fixes |