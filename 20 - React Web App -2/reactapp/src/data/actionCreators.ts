import { ACTIONS, AddProductsAction, ModifyOrderAction, ResetOrderAction } 
    from "./types";
import { Product } from "./entities";

export const addProduct = (...products: Product[]): AddProductsAction => ({
    type: ACTIONS.ADD_PRODUCTS,
    payload: products
});

export const modifyOrder = 
    (product: Product, quantity: number): ModifyOrderAction => ({
        type: ACTIONS.MODIFY_ORDER,
        payload: { product, quantity}
    });

export const resetOrder = (): ResetOrderAction => ({
    type: ACTIONS.RESET_ORDER
});
