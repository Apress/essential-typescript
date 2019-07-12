import { calculateTax } from "./tax";

export function printDetails(product) {
    let taxedPrice = calculateTax(product.price);
    console.log(`Name: ${product.name}, Taxed Price: ${taxedPrice}`);
}

export function applyDiscount(product, discount = 5) {
    product.price = product.price - 5;
}
