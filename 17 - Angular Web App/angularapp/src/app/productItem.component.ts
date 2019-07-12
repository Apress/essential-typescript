import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Product } from './data/entities';

export type productSelection = {
    product: Product, 
    quantity: number
}

@Component({
    selector: "product-item",
    templateUrl: "./productItem.component.html"
})
export class ProductItem {
    quantity: number = 1;

    @Input()
    product: Product;

    @Output()
    addToCart = new EventEmitter<productSelection>();

    handleAddToCart() {
        this.addToCart.emit({ product: this.product, 
            quantity: Number(this.quantity)});
    }
}
