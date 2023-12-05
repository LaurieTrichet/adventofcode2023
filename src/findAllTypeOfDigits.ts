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
            for (const spelledDigit of spelledDigits) {
                const found = input.startsWith(spelledDigit, index);
                if (found) {
                    const casted = spelledDigit as unknown as SpelledDigit;
                    const convertedDigit = SpelledDigit[casted] as unknown as number;
                    allDigitsFound.push(convertedDigit);
                    break;
                }
            }
        }
    }
    return allDigitsFound;
}


