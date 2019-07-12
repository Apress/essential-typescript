import { SportsProduct, SPORT } from "./product";
import { Cart } from "./cart";
import { sizeFormatter, costFormatter, writeMessage } from "./tsFormatters";
import debug from "debug";
import chalk from "chalk";

let kayak = new SportsProduct(1, "Kayak", 275, SPORT.Watersports);
let hat =  new SportsProduct(2, "Hat", 22.10, SPORT.Running, SPORT.Watersports);
let ball = new SportsProduct(3, "Soccer Ball", 19.50, SPORT.Soccer);

let cart = new Cart("Bob");
cart.addProduct(kayak, 1);
cart.addProduct(hat, 1);
cart.addProduct(hat, 2);

sizeFormatter("Cart", cart.itemCount);
costFormatter("Cart", `${cart.totalPrice}`);

console.log(chalk.greenBright("Formatted message"));
//console.log(chalk.notAColor("Formatted message"));
