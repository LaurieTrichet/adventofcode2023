import { combineFirstAndLastDigit } from "../src/day1-1";


/**
 * 1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
 */
test('combineFirstAndLastDigit ', () => {
    expect(combineFirstAndLastDigit("1abc2")).toBe(12);
    expect(combineFirstAndLastDigit("pqr3stu8vwx")).toBe(38);
    expect(combineFirstAndLastDigit("a1b2c3d4e5f")).toBe(15);
    expect(combineFirstAndLastDigit("treb7uchet")).toBe(77);
});