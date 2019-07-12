import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Order } from "./data/entities";
import { DataSource } from './data/dataSource';

@Component({
    selector: "order-details", 
    templateUrl: "./orderDetails.component.html"
})
export class OrderDetails {

    constructor(private dataSource: DataSource, private router: Router) {}

    get order() : Order {
        return this.dataSource.order;
    }
    
    submit() {
        this.dataSource.storeOrder().subscribe(id => 
            this.router.navigateByUrl(`/summary/${id}`));
    } 
}
