export function combineFirstAndLastDigit(input: string) {
    const firstDigit = lookForDigit(input);
    const reverseInput = [...input].reverse();
    const lastDigit = lookForDigit(reverseInput.join());

    return (firstDigit && lastDigit) ? parseInt(firstDigit.concat(lastDigit)) : undefined;
}

function lookForDigit(input: string) {
    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        const digit = Number.parseInt(element);
        if (Number.isInteger(digit)) {
            return element;
        }
    }
    return undefined;
}



