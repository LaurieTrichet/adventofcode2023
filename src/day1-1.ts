import { combineFirstAndLastDigit } from "./combineFirstAndLastDigit";
import { reduceTransformLinesFromInputFile } from "./getLinesFromFile";
import { accumulativeAddition } from "./mathHelpers";

async function execute() {
    // const test = await reduceTransformLinesFromInputFile("./assets/input-test.txt", combineFirstAndLastDigit, accumulativeAddition);
    const test = await reduceTransformLinesFromInputFile("./assets/input.txt", combineFirstAndLastDigit, accumulativeAddition);
    console.log(test);
}

execute();
