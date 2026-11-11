import { Action, IAgentRuntime, Memory, State } from "@elizaos/core";
import { TokenProvider } from "../providers/token.ts";
import { WalletProvider } from "../providers/wallet.ts";
import { Connection, PublicKey, VersionedTransaction } from "@solana/web3.js";
import { getWalletKey } from "../keypairUtils.ts";
import BigNumber from "bignumber.js";
async function getTradeRecommendation(openAiApiKey, cryptoTokensJson, walletBalance) {
    if (!openAiApiKey || typeof openAiApiKey !== "string") {
        throw new Error("Invalid OpenAI API key.");
    }
    if (typeof cryptoTokensJson !== "object" || cryptoTokensJson === null) {
        throw new Error("Invalid cryptoTokensJson provided. It should be a non-null object.");
    }
    if (typeof walletBalance !== "object" || walletBalance === null) {
        throw new Error("Invalid walletBalance provided. It should be a non-null object.");
    }

    const tradableTokens = Object.keys(cryptoTokensJson).filter(token => cryptoTokensJson[token]);

    const walletItems = walletBalance.data?.items || [];
    const tradableWalletTokens = walletItems.filter(item =>
        tradableTokens.includes(item.symbol.toLowerCase())
    );

    const prompt = `
You are a seasoned crypto trading expert. Based on the following available tokens for trading, my current wallet balance, and tradable wallet tokens, please recommend:
1. Which tokens I should trade.
2. How much amount of each token I should purchase to maximize profit.
3. Provide the contract address (CA) for both input and output tokens in your recommendations.

**Available Tokens for Trading:** ${JSON.stringify(cryptoTokensJson, null, 2)}
**Wallet Balance:** ${JSON.stringify(walletBalance, null, 2)}
**Tradable Wallet Tokens:** ${JSON.stringify(tradableWalletTokens, null, 2)}

**Trading Budget:**
Assume I will use only (5% of my wallet balance) for trading recommendations.

Consider the following factors in your recommendation:
1. Token value in USD.
2. My trading budget.
3. Market trends and liquidity of each token.
4. The value of the input token in relation to the target token.
5. Any other relevant metrics for maximizing profitability.

If no tokens are worth trading, state "No trade recommended."

**Provide your recommendation in the following JSON format:**
{
    "recommendations": [
        {
            "inputTokenCA": "INPUT_TOKEN_CONTRACT_ADDRESS",
            "outputTokenCA": "OUTPUT_TOKEN_CONTRACT_ADDRESS",
            "amountToBuy": "AMOUNT"
        },
        ...
    ]
}
`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${openAiApiKey}`,
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [
                { role: "system", content: "You are ChatGPT, a crypto trading expert." },
                { role: "user", content: prompt },
            ],
            temperature: 0.3,
            max_tokens: 300, // Increase max tokens for more detailed output
        }),
    });

    if (!response.ok) {
        throw new Error(`OpenAI API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const llmResponse = data.choices[0]?.message?.content?.trim();

    // Check if llmResponse contains valid JSON
    if (!llmResponse) {
        throw new Error("Invalid or empty response from OpenAI API.");
    }

    const match = llmResponse.match(/\{[\s\S]*\}/);
    if (!match) {
        throw new Error("Could not extract JSON data from OpenAI response.");
    }

    try {
        const recommendations = JSON.parse(match[0]);
        return recommendations;
    } catch (err) {
        throw new Error(`Error parsing recommendations JSON: ${err.message}`);
    }
}


const fetchBirdEyeDataAction: Action = {
    name: "FETCH_BIRDEYE_DATA",
    similes: ["GET_BIRDEYE_DATA", "FETCH_API_DATA"],
    description:
        "Fetches data from the BirdEye API, logs it to the console, and checks if the token should be traded for multiple tokens.",

    validate: async (runtime: IAgentRuntime, message: Memory) => {
          // Check if the necessary parameters are provided in the message
          console.log("Message:", message);
          return true;
    },

    handler: async (runtime: IAgentRuntime, message: Memory, state?: State) => {
        try {
            const apiKey = runtime.getSetting("BIRDEYE_API_KEY") || "";
            const walletAddress = runtime.getSetting("WALLET_PUBLIC_KEY") || "";
            const openAiApiKey = runtime.getSetting("OPENAI_API_KEY") || "";

            if (!apiKey || !walletAddress || !openAiApiKey) {
                throw new Error("Missing API keys or Wallet Address in the application settings.");
            }

            const endpoint = `https://public-api.birdeye.so/v1/wallet/token_list?wallet=${walletAddress}`;
            const options = {
                method: "GET",
                headers: {
                    accept: "application/json",
                    "X-API-KEY": apiKey,
                    "x-chain": "solana",
                },
            };

            const response = await fetch(endpoint, options);
            if (!response.ok) {
                throw new Error(`API call failed with status: ${response.status}`);
            }
            const birdEyeWalletPortfolio = await response.json();
            console.log("Current Wallet Portfolio:", birdEyeWalletPortfolio);

            const connection = new Connection("https://api.mainnet-beta.solana.com");
            const { publicKey } = await getWalletKey(runtime, false);
            const walletProvider = new WalletProvider(connection, publicKey);

            const tokens = [
                { name: "SOL", address: "So11111111111111111111111111111111111111112" },
                { name: "USD Coin", address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v" },
                { name: "Bonk", address: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263" },
            ];

            const results = [];
            for (const token of tokens) {
                const tokenProvider = new TokenProvider(
                    token.address,
                    walletProvider,
                    runtime.cacheManager
                );
                const shouldTrade = await tokenProvider.shouldTradeToken();
                results.push({ token: token.name, shouldTrade });
            }
            console.log("Current Wallet Portfolio:", JSON.stringify(birdEyeWalletPortfolio, null, 2));
            console.log("Results:", results);

            const tradableTokens = results.reduce((acc, cur) => {
                acc[cur.token.toLowerCase()] = cur.shouldTrade;
                return acc;
            }, {});

            const recommendation = await getTradeRecommendation(
                openAiApiKey,
                tradableTokens,
                birdEyeWalletPortfolio
            );

            const recommendationsResponse = recommendation.recommendations;

            if (!recommendationsResponse || recommendationsResponse.length === 0) {
                console.log("No trade recommendations available.");
                return;
            }

            console.log("Trade Recommendations:", recommendationsResponse);

            // Step 3: Pass Recommendations to buyRecommendedTokens
           // await buyRecommendedTokens(recommendationsResponse, runtime);

            console.log("Trade execution completed.");

            return true;

        } catch (error) {
            console.error("Error in action handler:", error);
            return false;
        }
    },

    examples: [
        [
            {
                user: "{{user1}}",
                content: { text: "Fetch BirdEye data and get trade recommendations" },
            },
            {
                user: "{{user2}}",
                content: {
                    text: "BirdEye data has been fetched, and trade recommendations are available.",
                    action: "FETCH_BIRDEYE_DATA",
                },
            },
        ],
    ],
};


/*
/**
 * Fetch token decimals from the blockchain.
 * @param connection Solana connection object.
 * @param tokenMintAddress The mint address of the token.
 * @returns Decimals for the token.

export async function getTokenDecimals(connection: Connection, tokenMintAddress: string): Promise<number> {
    try {
        const tokenMintPublicKey = new PublicKey(tokenMintAddress);
        const tokenAccountInfo = await connection.getParsedAccountInfo(tokenMintPublicKey);

        if (!tokenAccountInfo || !tokenAccountInfo.value) {
            throw new Error("Token account not found on the blockchain.");
        }

        const tokenData = tokenAccountInfo.value.data as any; // Token metadata is stored in `data`.
        if (!tokenData || !tokenData.parsed) {
            throw new Error("Invalid token account data.");
        }

        const decimals = tokenData.parsed.info.decimals;
        return decimals;
    } catch (error) {
        console.error(`Error fetching token decimals for mint ${tokenMintAddress}:`, error);
        throw error;
    }
}




async function buyRecommendedTokens(recommendations, runtime) {
    try {
        const connection = new Connection("https://api.mainnet-beta.solana.com");
        const { publicKey: walletPublicKey } = await getWalletKey(runtime, false);

        for (const recommendation of recommendations) {
            const { inputTokenCA, outputTokenCA, amountToBuy } = recommendation;

            if (!inputTokenCA || !outputTokenCA || !amountToBuy) {
                console.error("Invalid recommendation data:", recommendation);
                continue;
            }

            console.log(`Preparing to swap ${amountToBuy} of ${inputTokenCA} for ${outputTokenCA}`);

            // Adjust the amount based on token decimals
            const inputTokenDecimals =
                inputTokenCA === "So11111111111111111111111111111111111111112" // SOL token address
                    ? new BigNumber(9)
                    : new BigNumber(
                          await getTokenDecimals(connection, inputTokenCA)
                      );

            const adjustedAmount = new BigNumber(amountToBuy).multipliedBy(
                new BigNumber(10).pow(inputTokenDecimals)
            );

            console.log("Adjusted Amount:", adjustedAmount.toString());

            const quoteResponse = await fetch(
                `https://quote-api.jup.ag/v6/quote?inputMint=${inputTokenCA}&outputMint=${outputTokenCA}&amount=${adjustedAmount}&slippageBps=50`
            );

            const quoteData = await quoteResponse.json();

            if (!quoteData || quoteData.error) {
                console.error("Error fetching quote for swap:", quoteData);
                continue;
            }

            console.log("Quote data received:", quoteData);

            const swapRequestBody = {
                quoteResponse: quoteData,
                userPublicKey: walletPublicKey.toString(),
                wrapAndUnwrapSol: true,
                computeUnitPriceMicroLamports: 2000000,
                dynamicComputeUnitLimit: true,
            };

            const swapResponse = await fetch("https://quote-api.jup.ag/v6/swap", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(swapRequestBody),
            });

            const swapData = await swapResponse.json();

            if (!swapData || !swapData.swapTransaction) {
                console.error("Error executing swap transaction:", swapData);
                continue;
            }

            console.log("Swap transaction received:", swapData);

            const transactionBuf = Buffer.from(swapData.swapTransaction, "base64");
            const transaction = VersionedTransaction.deserialize(transactionBuf);

            console.log("Signing transaction...");
            const { keypair } = await getWalletKey(runtime, true);

            if (keypair.publicKey.toBase58() !== walletPublicKey.toBase58()) {
                throw new Error(
                    "Generated public key doesn't match expected public key"
                );
            }

            transaction.sign([keypair]);

            console.log("Sending transaction...");

            const latestBlockhash = await connection.getLatestBlockhash();
            const txid = await connection.sendTransaction(transaction, {
                skipPreflight: false,
                maxRetries: 3,
                preflightCommitment: "confirmed",
            });

            console.log(`Transaction sent successfully! Transaction ID: ${txid}`);
        }

        console.log("All recommendations processed.");
    } catch (error) {
        console.error("Error in buying recommended tokens:", error);
    }
}

 */



export default fetchBirdEyeDataAction;
