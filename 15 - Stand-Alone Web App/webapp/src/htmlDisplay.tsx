import { createElement } from "./tools/jsxFactory";
import { Product, Order } from "./data/entities";
import { AbstractDataSource } from "./data/abstractDataSource";
import { ProductList } from "./productList";

export class HtmlDisplay {
    private containerElem: HTMLElement;
    private selectedCategory: string;

    constructor() {
        this.containerElem = document.createElement("div");
    }

    props: {
        dataSource: AbstractDataSource;
    }

    async getContent(): Promise<HTMLElement> {
        await this.updateContent();
        return this.containerElem;
    }   

    async updateContent() {
        let products = await this.props.dataSource.getProducts("id", 
            this.selectedCategory);
        let categories = await this.props.dataSource.getCategories();
        this.containerElem.innerHTML = "";
        let content = <div>
            <ProductList products={ products } categories={ categories } 
                selectedCategory={ this.selectedCategory }
                addToOrderCallback={ this.addToOrder } 
                filterCallback={ this.selectCategory} />
        </div>
        this.containerElem.appendChild(content);
    }
    
    addToOrder = (product: Product, quantity: number) => {
        this.props.dataSource.order.addProduct(product, quantity);
        this.updateContent();
    }

    selectCategory = (selected: string) => {
        this.selectedCategory = selected === "All" ? undefined : selected;
        this.updateContent();
    }
}
