import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { DataSourceImpl } from "./dataSource";
import { Product, Order } from "./entities";

// const protocol = document.location.protocol;
// const hostname = document.location.hostname;
// const port = 4600;

const urls = {
    // products: `${protocol}//${hostname}:${port}/products`,
    // orders: `${protocol}//${hostname}:${port}/orders`
    products: "/api/products",
    orders: "/api/orders"
};

@Injectable()
export class RemoteDataSource extends DataSourceImpl {

    constructor(private http: HttpClient) {
        super();
    }

    loadProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(urls.products);
    }

    storeOrder(order: Order): Observable<number> {
        let orderData = {
            lines: [...order.orderLines.values()].map(ol => ({
                productId: ol.product.id,
                productName: ol.product.name, 
                quantity: ol.quantity
            }))
        }       
        return this.http.post<{ id: number}>(urls.orders, orderData)
            .pipe<number>(map(val => val.id));
    }
}
