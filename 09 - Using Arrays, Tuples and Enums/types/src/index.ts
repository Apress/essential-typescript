function calculatePrice(quantity: 1 | 2, price: number): number {
    return quantity * price;
}

let total = calculatePrice(2, 19.99);
console.log(`Price: ${total}`);

function getRandomValue(): 1 | 2 | 3 | 4 {
    return Math.floor(Math.random() * 4) + 1 as 1 | 2 | 3 | 4;
}

enum City { London = "LON", Paris = "PAR", Chicago = "CHI" }

type comboType = [string, number | true, 1 | 2 | 3 | City.London][];

function getValue(input: comboType): comboType {
    return [["Apples", 100, 2], ["Oranges", true, 3]];
}

let result: comboType = getValue([["Bananas", true, 1]]);
console.log(`Result: ${result}`);
