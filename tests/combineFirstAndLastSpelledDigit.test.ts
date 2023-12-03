import { combineFirstAndLastSpelledDigit, parseDigits } from "../src/combineFirstAndLastSpelledDigit";
import { accumulativeAddition } from "../src/mathHelpers";

test("parse all digits", () => {
    expect(parseDigits("two1nine")).toStrictEqual([2, 1, 9]);
    expect(parseDigits("eightwothree")).toStrictEqual([8, 3]);
    expect(parseDigits("abcone2threexyz")).toStrictEqual([1, 2, 3]);
    expect(parseDigits("xtwone3four")).toStrictEqual([2, 3, 4]);
    expect(parseDigits("4nineeightseven2")).toStrictEqual([4, 9, 8, 7, 2]);
    expect(parseDigits("zoneight234")).toStrictEqual([1, 2, 3, 4]);
    expect(parseDigits("7pqrstsixteen")).toStrictEqual([7, 6]);
});
test("combine spelled digits", () => {
    expect(combineFirstAndLastSpelledDigit("two1nine")).toBe(29);
    expect(combineFirstAndLastSpelledDigit("eightwothree")).toBe(83);
    expect(combineFirstAndLastSpelledDigit("abcone2threexyz")).toBe(13);
    expect(combineFirstAndLastSpelledDigit("xtwone3four")).toBe(24);
    expect(combineFirstAndLastSpelledDigit("4nineeightseven2")).toBe(42);
    expect(combineFirstAndLastSpelledDigit("zoneight234")).toBe(14);
    expect(combineFirstAndLastSpelledDigit("7pqrstsixteen")).toBe(76);
});

test("sumAllCalibrationsInDocument", () => {
    expect(["two1nine",
        "eightwothree",
        "abcone2threexyz",
        "xtwone3four",
        "4nineeightseven2",
        "zoneight234",
        "7pqrstsixteen"].map(line => combineFirstAndLastSpelledDigit(line)).reduce(accumulativeAddition)).toBe(281);
});
