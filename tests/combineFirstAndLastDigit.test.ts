import { combineFirstAndLastDigit, } from "../src/combineFirstAndLastDigit";

import { accumulativeAddition } from "../src/mathHelpers";

test('combineFirstAndLastDigit ', () => {
    expect(combineFirstAndLastDigit("1abc2")).toBe(12);
    expect(combineFirstAndLastDigit("pqr3stu8vwx")).toBe(38);
    expect(combineFirstAndLastDigit("a1b2c3d4e5f")).toBe(15);
    expect(combineFirstAndLastDigit("treb7uchet")).toBe(77);
});

test("sumAllCalibrationsInDocument", () => {
    expect(["1abc2",
        "pqr3stu8vwx",
        "a1b2c3d4e5f",
        "treb7uchet"].map(line => combineFirstAndLastDigit(line)).reduce(accumulativeAddition)).toBe(142);
});
