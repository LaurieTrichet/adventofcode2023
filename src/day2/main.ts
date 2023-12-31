
import { getAllLinesFromFile } from "../utils/getLinesFromFile";
import { Colours, GamePool, getCubePowerForMinimumAmountOfCubesRequired, sumOfCubePowerForMinimumAmountOfCubesRequired, sumOfIndexOfValidGamesForGamePool } from "./parseGameInput";
const game1Pool: Map<Colours, number> = new Map([
    [Colours.blue, 14],
    [Colours.red, 12],
    [Colours.green, 13],
]);


async function execute() {
    const allGames = await getAllLinesFromFile("./assets/input-day-2.txt");
    // const test1 = sumOfIndexOfValidGamesForGamePool(allGames, game1Pool);
    // console.log("1 -> ", test1);

    const test2 = sumOfCubePowerForMinimumAmountOfCubesRequired(allGames);
    console.log("2 -> ", test2);
}


execute();
