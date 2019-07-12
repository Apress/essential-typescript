import calcTaxAndSum, { calculateTax } from "./tax";
import { printDetails, applyDiscount } from "./utils";

class Product {
    constructor(name, price) {
        this.id = Symbol();
        this.name = name;
        this.price = price;        
    }
}

let product = new Product("Hat", 100);
applyDiscount(product, 10);
let taxedPrice = calculateTax(product.price);
printDetails(product);

let products = [new Product("Gloves", 23), new Product("Boots", 100)];
let totalPrice = calcTaxAndSum(...products.map(p => p.price));
console.log(`Total Price: ${totalPrice.toFixed(2)}`);
