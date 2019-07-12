export function sizeFormatter(thing: string, count: number): void {
    writeMessage(`The ${thing} has ${count} items`);
}

export function costFormatter(thing: string, cost: number | string): void {
    if (typeof cost === "number") {
        writeMessage(`The ${thing} costs $${cost.toFixed(2)}`);
    } else {
        writeMessage(`The ${thing} costs $${cost}`);
    }
}

export function writeMessage(message: string): void {
    console.log(message);
}
