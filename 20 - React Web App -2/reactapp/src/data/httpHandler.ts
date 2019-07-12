import Axios from "axios";
import { Product, Order}  from "./entities";

// const protocol = document.location.protocol;
// const hostname = document.location.hostname;
// const port = 4600;

const urls = {
    // products: `${protocol}//${hostname}:${port}/products`,
    // orders: `${protocol}//${hostname}:${port}/orders`
    products: "/api/products",
    orders: "/api/orders"
};

export class HttpHandler {

    loadProducts(callback: (products: Product[]) => void): void {
        Axios.get(urls.products).then(response => callback(response.data))
    }

    storeOrder(order: Order, callback: (id: number) => void): void {
        let orderData = {
            lines: [...order.orderLines.values()].map(ol => ({
                productId: ol.product.id,
                productName: ol.product.name, 
                quantity: ol.quantity
            }))
        }       
        Axios.post(urls.orders, orderData)
            .then(response => callback(response.data.id));
    }
}
