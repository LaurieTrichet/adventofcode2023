import { combineFirstAndLastSpelledDigit } from "./combineFirstAndLastSpelledDigit";
import { reduceTransformLinesFromInputFile } from "../utils/getLinesFromFile";
import { accumulativeAddition } from "../utils/mathHelpers";

async function execute() {
    // const test = await reduceTransformLinesFromInputFile("./assets/input-test.txt", combineFirstAndLastDigit, accumulativeAddition);
    // const test1 = await reduceTransformLinesFromInputFile("./assets/input.txt", combineFirstAndLastDigit, accumulativeAddition);
    // console.log("1", test1);

    const test2 = await reduceTransformLinesFromInputFile("./assets/input.txt", combineFirstAndLastSpelledDigit, accumulativeAddition);
    console.log("2", test2);
}

execute();
