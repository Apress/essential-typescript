import { AbstractDataSource } from "./abstractDataSource";
import { Product, Order } from "./entities";
import Axios from "axios";

// const protocol = document.location.protocol;
// const hostname = document.location.hostname;
// const port = 4600;

const urls = {
    // products: `${protocol}//${hostname}:${port}/products`,
    // orders: `${protocol}//${hostname}:${port}/orders`
    products: "/api/products",
    orders: "/api/orders"
};

export class RemoteDataSource extends AbstractDataSource {

    loadProducts(): Promise<Product[]> {
        return Axios.get(urls.products).then(response => response.data);
    }

    storeOrder(): Promise<number> {
        let orderData = {
            lines: [...this.order.orderLines.values()].map(ol => ({
                productId: ol.product.id,
                productName: ol.product.name, 
                quantity: ol.quantity
            }))
        }       
        return Axios.post(urls.orders, orderData).then(response => response.data.id);
    }
}
