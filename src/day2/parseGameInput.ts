import { accumulativeAddition } from "../utils/mathHelpers";

export enum Colours {
    red,
    green,
    blue
}
export const blueRegex = /\d+\sblue/g;
export const redRegex = /\d+\sred/g;
export const greenRegex = /\d+\sgreen/g;
export type GamePool = Map<Colours, number>;

const colorToRegexMap = new Map([
    [Colours.red, redRegex],
    [Colours.blue, blueRegex],
    [Colours.green, greenRegex],
]);

export function sumOfIndexOfValidGamesForGamePool(inputs: string[], pool: GamePool) {
    return inputs.map(input => parseGame(input, pool)).reduce(accumulativeAddition);
}

export function parseGame(input: string, pool: GamePool) {
    const gameIndex = parseGameIndex(input) ?? 0;
    console.log("--- game " + gameIndex);
    let possibleGame = true;
    const sets = input.split(";");
    sets.forEach(set => {
        let possibleSet = true;
        for (const [colour, regex] of colorToRegexMap) {
            const result = totalCubes(regex, set);
            const totalCubesInBagForColor = pool.get(colour) ?? 0;
            possibleSet = possibleSet && (result <= totalCubesInBagForColor);
        }
        possibleGame = possibleGame && possibleSet;
    });

    return possibleGame ? gameIndex : 0;
}

export function parseGameIndex(input: string) {
    const gameIndexRegex = /^Game\s\d+:{1}/;
    const results = gameIndexRegex.exec(input);
    return results ? parseRegexNumber(results[0]) : null;
}

export function parseRegexNumber(input: string) {
    const digitsRegex = /\d+/;
    const results = digitsRegex.exec(input);
    const index = results?.[0];
    return index ? Number.parseInt(index) : null;
}

export function totalCubes(regex: RegExp, input: string) {
    let result = 0;
    let arrayRegResult;
    while ((arrayRegResult = regex.exec(input)) !== null) {
        const cubeDescription = arrayRegResult[0];
        const index = parseRegexNumber(cubeDescription) ?? 0;
        console.log("totalCubes", cubeDescription, index);

        result += index;
    }
    console.log("totalCubes result ", result);
    return result;
}

export function parseBlue(input: string) {
    const results = blueRegex.exec(input);
    const index = results?.[0];
    return index ? Number.parseInt(index) : null;
}

