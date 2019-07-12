import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Order } from './data/entities';

@Component({
    selector: "header",
    templateUrl: "./header.component.html"
})
export class Header {

    @Input()
    order: Order;

    @Output()
    submit = new EventEmitter<void>();

    get headerText(): string {
        let count = this.order.productCount;
        return count === 0 ? "(No Selection)" 
            : `${ count } product(s), $${ this.order.total.toFixed(2)}`
    }
}
