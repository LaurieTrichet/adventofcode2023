export function accumulativeAddition(previousValue: number | undefined, currentValue: number | undefined) {
    return (previousValue ?? 0) + (currentValue ?? 0);
}
