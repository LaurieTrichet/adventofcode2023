enum SpelledDigit {

    one = 1,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine
}

export function combineFirstAndLastSpelledDigit(input: string) {
    const digitArray = parseDigits(input);
    if (!digitArray || digitArray.length === 0) {
        return undefined;
    }
    const result = Number.parseInt([digitArray[0], digitArray[digitArray.length - 1]].join(''));
    return result;
}

export function parseDigits(input: string) {
    let buffer: string[] = [];

    const spelledDigits: string[] = Array.from(Object.keys(SpelledDigit).values());
    const allDigitsFound: number[] = [];
    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        const digit = Number.parseInt(element);
        if (Number.isInteger(digit)) {
            buffer = [];
            allDigitsFound.push(digit);
        } else {
            buffer.push(element);
            const spelledDigitBuffer = buffer.join('') ?? "";
            const validSpelledDigit: string | undefined = spelledDigits.find((value: string) => spelledDigitBuffer.includes(value));
            if (validSpelledDigit) {
                const casted = validSpelledDigit as unknown as SpelledDigit;
                const convertedDigit = SpelledDigit[casted] as unknown as number;
                allDigitsFound.push(convertedDigit);
                buffer = [];
            }
        }
    }
    // console.log(allDigitsFound);

    return allDigitsFound;
}


