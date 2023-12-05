
import { parseDigits } from "../../src/day1/findAllTypeOfDigits";

test("parse all digits", () => {
    expect(parseDigits("two1nine")).toStrictEqual([2, 1, 9]);
    expect(parseDigits("eightwothree")).toStrictEqual([8, 2, 3]);
    expect(parseDigits("abcone2threexyz")).toStrictEqual([1, 2, 3]);
    expect(parseDigits("xtwone3four")).toStrictEqual([2, 1, 3, 4]);
    expect(parseDigits("4nineeightseven2")).toStrictEqual([4, 9, 8, 7, 2]);
    expect(parseDigits("zoneight234")).toStrictEqual([1, 8, 2, 3, 4]);
    expect(parseDigits("7pqrstsixteen")).toStrictEqual([7, 6]);
});


