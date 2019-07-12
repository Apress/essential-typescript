import { Product, Order } from "./entities";
import { minimumValue } from "../decorators";

export type ProductProp = keyof Product;

export abstract class AbstractDataSource {
    private _products: Product[];
    private _categories: Set<string>;
    public order: Order;    
    public loading: Promise<void>;

    constructor() {
        this._products = [];
        this._categories = new Set<string>();
        this.order = new Order();
        this.loading = this.getData();
    }

    @minimumValue("price", 30)
    async getProducts(sortProp: ProductProp = "id", 
            category? : string): Promise<Product[]> {
        await this.loading;
        return this.selectProducts(this._products, sortProp, category);
    }

    protected async getData(): Promise<void> {
        this._products = [];
        this._categories.clear();            
        const rawData = await this.loadProducts();
        rawData.forEach(p => {
            this._products.push(p);
            this._categories.add(p.category);
        });
    }

    protected selectProducts(prods: Product[], 
            sortProp: ProductProp, category?: string): Product[] {
        return prods.filter(p=> category === undefined || p.category === category)
                .sort((p1, p2) => p1[sortProp] < p2[sortProp] 
                    ? -1 : p1[sortProp] > p2[sortProp] ? 1: 0);
    }

    async getCategories(): Promise<string[]> {
        await this.loading;
        return [...this._categories.values()];
    }

    protected abstract loadProducts(): Promise<Product[]>;
    abstract storeOrder(): Promise<number>;
}
