import { StoreData } from "./types";
import { modifyOrder } from "./actionCreators";
import { connect } from "react-redux";
import { ProductList } from "../productList";

const mapStateToProps = (data: StoreData) => ({
    products: data.products,
    categories: [...new Set(data.products.map(p => p.category))],
    order: data.order
})

const mapDispatchToProps = {
    addToOrder: modifyOrder
}

const connectFunction = connect(mapStateToProps, mapDispatchToProps);
export const ConnectedProductList = connectFunction(ProductList);
