import { Colours, blueRegex, getCubePowerForMinimumAmountOfCubesRequired, getGameIndexNumberForPossibleGames, parseGameIndex, parseRegexNumber, sumOfIndexOfValidGamesForGamePool, totalCubes } from "../../src/day2/parseGameInput";

const game1Pool: Map<Colours, number> = new Map([
    [Colours.blue, 14],
    [Colours.red, 12],
    [Colours.green, 13],
]);

const game1 = [
    "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
    "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
    "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
    "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
    "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
];

test("parse Game index", () => {
    expect(parseRegexNumber("Game 1:")).toBe(1);
    expect(parseGameIndex("Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green")).toBe(1);
    expect(parseRegexNumber("Game A:")).toBeNull();

});

test("get the number of cube for a regex", () => {
    expect(totalCubes(blueRegex, "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green")).toBe(9);
});

test("game that are possible with game1Pool", () => {
    expect(getGameIndexNumberForPossibleGames("Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green", game1Pool)).toBe(1);
    expect(getGameIndexNumberForPossibleGames("Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue", game1Pool)).toBe(2);
    expect(getGameIndexNumberForPossibleGames("Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red", game1Pool)).toBe(0);
    expect(getGameIndexNumberForPossibleGames("Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red", game1Pool)).toBe(0);
    expect(getGameIndexNumberForPossibleGames("Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green", game1Pool)).toBe(5);
    expect(getGameIndexNumberForPossibleGames("Game 37: 10 blue, 5 green, 6 red; 5 red, 13 green, 10 blue; 1 green, 7 blue, 4 red; 10 green, 4 blue, 14 red; 13 green, 9 red, 1 blue", game1Pool)).toBe(0);
});

test("sums of game index that are possible with game1Pool", () => {
    expect(sumOfIndexOfValidGamesForGamePool(game1, game1Pool)).toBe(8);
});
test("power of the min amount of cube for game success", () => {
    expect(getCubePowerForMinimumAmountOfCubesRequired("Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green")).toBe(48);
    expect(getCubePowerForMinimumAmountOfCubesRequired("Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue")).toBe(12);
    expect(getCubePowerForMinimumAmountOfCubesRequired("Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red")).toBe(1560);
    expect(getCubePowerForMinimumAmountOfCubesRequired("Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red")).toBe(630);
    expect(getCubePowerForMinimumAmountOfCubesRequired("Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green")).toBe(36);
})


