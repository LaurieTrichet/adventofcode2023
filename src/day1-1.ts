import { combineFirstAndLastDigit } from "./combineFirstAndLastDigit";
import { reduceTransformLinesFromInputFile } from "./getLinesFromFile";
import { accumulativeAddition } from "./mathHelpers";

async function execute() {
    const test = await reduceTransformLinesFromInputFile("./assets/input-test.txt", combineFirstAndLastDigit, accumulativeAddition);
    console.log(test);
}

execute();
