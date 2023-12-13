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
    return inputs.map(input => getGameIndexNumberForPossibleGames(input, pool)).reduce(accumulativeAddition);
}

export function sumOfCubePowerForMinimumAmountOfCubesRequired(inputs: string[]) {
    return inputs.map(input => getCubePowerForMinimumAmountOfCubesRequired(input)).reduce(accumulativeAddition);
}

export function getGameIndexNumberForPossibleGames(input: string, pool: GamePool) {
    const gameIndex = parseGameIndex(input) ?? 0;
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

export function getCubePowerForMinimumAmountOfCubesRequired(input: string) {
    const gameIndex = parseGameIndex(input) ?? 0;
    const result: number[] = [];
    for (const [colour, regex] of colorToRegexMap) {
        result.push(maxCubes(regex, input));
    }
    return result.reduce((previousValue: number, currentValue: number) => previousValue * currentValue);
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
        result += index;
    }
    return result;
}

export function maxCubes(regex: RegExp, input: string) {
    let result = 0;
    let arrayRegResult;
    while ((arrayRegResult = regex.exec(input)) !== null) {
        const cubeDescription = arrayRegResult[0];
        const index = parseRegexNumber(cubeDescription) ?? 0;
        result = Math.max(result, index);
    }
    return result;
}

export function parseBlue(input: string) {
    const results = blueRegex.exec(input);
    const index = results?.[0];
    return index ? Number.parseInt(index) : null;
}

