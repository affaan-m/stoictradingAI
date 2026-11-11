import assert from 'assert';
import {
    send,
    log,
    logError,
    runIntegrationTest
} from "./testLibrary.mjs";

async function helloTrump() {
    const reply = await send("Hi");
    assert(reply.length > 10);
}

async function coinbaseTest() {
    // TODO
}

const testSuite = [helloTrump]; // Add tests here
try {
    for (const test of testSuite) await runIntegrationTest(test);
} catch (error) {
    logError(error);
    process.exit(1);
}
