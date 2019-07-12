import { AbstractDataSource } from "./abstractDataSource";
import { Product } from "./entities";

export class LocalDataSource extends AbstractDataSource {
 
        loadProducts(): Promise<Product[]> {
            return Promise.resolve([
                { id: 1, name: "P1", category: "Watersports",
                    description: "P1 (Watersports)", price: 3 },
                { id: 2, name: "P2", category: "Watersports",
                    description: "P2 (Watersports)", price: 4 },
                { id: 3, name: "P3", category: "Running",
                    description: "P3 (Running)", price: 5 },
                { id: 4, name: "P4", category: "Chess",
                    description: "P4 (Chess)", price: 6 },
                { id: 5, name: "P5", category: "Chess",
                    description: "P6 (Chess)", price: 7 },
            ]);
        }

        storeOrder(): Promise<number> {
            console.log("Store Order");
            console.log(JSON.stringify(this.order));
            return Promise.resolve(1);
        }
}
