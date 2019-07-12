import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { Product, Order } from "./entities";

export type ProductProp = keyof Product;

export abstract class DataSourceImpl {
    abstract loadProducts(): Observable<Product[]>;
    abstract storeOrder(order: Order): Observable<number>;    
}

@Injectable()
export class DataSource {
    private _products: Product[];
    private _categories: Set<string>;
    public order: Order;    

    constructor(private impl: DataSourceImpl) {
        this._products = [];
        this._categories = new Set<string>();
        this.order = new Order();
        this.getData();
    }

    getProducts(sortProp: ProductProp = "id", category? : string): Product[] {
        return this.selectProducts(this._products, sortProp, category);
    }

    protected getData(): void {
        this._products = [];
        this._categories.clear();            
        this.impl.loadProducts().subscribe(rawData => {
            rawData.forEach(p => {
                this._products.push(p);
                this._categories.add(p.category);
            });
        });  
    }

    protected selectProducts(prods: Product[], sortProp: ProductProp, 
            category?: string): Product[] {
        return prods.filter(p => category === undefined || p.category === category)
                .sort((p1, p2) => p1[sortProp] < p2[sortProp] 
                    ? -1 : p1[sortProp] > p2[sortProp] ? 1: 0);
    }

    getCategories(): string[] {
        return [...this._categories.values()];
    }

    storeOrder(): Observable<number> {
        return this.impl.storeOrder(this.order);
    }
}
