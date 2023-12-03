import { open } from "node:fs/promises";
import path from "node:path";

export function combineFirstAndLastDigit(input: string) {
    const firstDigit = lookForDigit(input);
    const reverseInput = [...input].reverse();
    const lastDigit = lookForDigit(reverseInput.join());
    return (firstDigit && lastDigit) ? parseInt(firstDigit.concat(lastDigit)) : undefined;
}

function lookForDigit(input: string) {
    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        const digit = Number.parseInt(element);
        if (Number.isInteger(digit)) {
            return element;
        }
    }
    return undefined;
}

export async function reduceTransformLinesFromInputFile(inputFilePath: string,
    transform: (input: string) => (number | undefined),
    reduceFunction: (previousValue: number | undefined, currentValue: number | undefined, currentIndex: number, array: (number | undefined)[]) => number | undefined) {
    const filePath = path.join(path.resolve("."), inputFilePath);
    const file = await open(filePath);
    const result: (number | undefined)[] = [];
    for await (const line of file.readLines()) {
        console.log(line);
        result.push(transform(line));
    }
    return result.reduce(reduceFunction);
}

export function add(previousValue: number | undefined, currentValue: number | undefined) {
    return (previousValue ?? 0) + (currentValue ?? 0);
}
