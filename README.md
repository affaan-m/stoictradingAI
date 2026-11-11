# stoictradingAI

An autonomous Solana trading agent, built as a plugin on the elizaOS agent framework and developed live in public.

The agent runs a full loop without a human in it:

1. **Ingest** market data from Birdeye and Helius.
2. **Filter** candidates on liquidity, volume, holder distribution and trust score.
3. **Decide** by asking an LLM for a ranked trade decision with its reasoning.
4. **Execute** swaps on-chain through Jupiter.
5. **Publish** every executed trade with its reasoning and transaction link, so anyone can audit what it did.

## Where the work is

Most of this repository is the elizaOS framework (v0.1.7). The trading system lives in `packages/plugin-solana/src/`:

| File | Role |
|---|---|
| `actions/mainTradingActions.ts` | Trading loop entry point |
| `actions/tradingStartAction.ts`, `providers/tradingStartProvider.ts` | Starts and schedules the loop |
| `actions/fetchBirdEyeData.ts` | Market data ingestion and candidate filtering |
| `actions/purchaseRecommendedTokens.ts` | LLM trade selection and position sizing |
| `actions/swap.ts` | Jupiter swap execution and trade publishing |
| `providers/wallet.ts`, `providers/token.ts` | Portfolio and asset state |
| `characters/modern_stoic.character.json` | Agent configuration |

## Running it

```bash
cp .env.example .env   # fill in your own keys; never commit this file
pnpm install
pnpm build
pnpm start --character=characters/modern_stoic.character.json
```

Required environment variables include `SOLANA_PRIVATE_KEY`, `SOLANA_PUBLIC_KEY`, `OPENAI_API_KEY`, `BIRDEYE_API_KEY`, `HELIUS_API_KEY`, and the `TWITTER_*` credentials if publishing is enabled.

## Status

Archived. Kept as an engineering reference; it is not maintained and should not be run with real funds without review.

## Credits

Built on [elizaOS](https://github.com/elizaOS/eliza), MIT licensed. See `LICENSE`.
