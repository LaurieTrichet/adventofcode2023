import { combineFirstAndLastSpelledDigit } from "../../src/day1/combineFirstAndLastSpelledDigit";
import { accumulativeAddition } from "../../src/day1/mathHelpers";


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
