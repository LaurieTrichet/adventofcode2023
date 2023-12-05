import { open } from "node:fs/promises";
import path from "node:path";
export async function reduceTransformLinesFromInputFile(inputFilePath: string,
    transform: (input: string) => (number | undefined),
    reduceFunction: (previousValue: number | undefined, currentValue: number | undefined, currentIndex: number, array: (number | undefined)[]) => number | undefined) {
    const filePath = path.join(path.resolve("."), inputFilePath);
    const file = await open(filePath);
    const result: (number | undefined)[] = [];
    for await (const line of file.readLines()) {
        result.push(transform(line));
    }
    // console.log(result);
    return result.reduce(reduceFunction);
}
