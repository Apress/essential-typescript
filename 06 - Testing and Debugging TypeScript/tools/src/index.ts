import { sum } from "./calc";

let printMessage = (msg: string): void =>  console.log(`Message: ${ msg }`);

let message = ("Hello, TypeScript");
printMessage(message);

// tslint:disable-next-line no-debugger
debugger;

let total = sum(100, 200, 300);
console.log(`Total: ${total}`);
