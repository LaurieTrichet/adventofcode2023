import { parseDigits } from "./findAllTypeOfDigits";

export function combineFirstAndLastSpelledDigit(input: string) {
    const digitArray = parseDigits(input);
    if (!digitArray || digitArray.length === 0) {
        return undefined;
    }
    const result = Number.parseInt([digitArray[0], digitArray[digitArray.length - 1]].join(''));

    return result;
}
