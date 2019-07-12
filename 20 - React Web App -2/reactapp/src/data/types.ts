import { Product, Order } from "./entities";
import { Action } from "redux";

export interface StoreData {
    products: Product[],
    order: Order
}

export enum ACTIONS {
    ADD_PRODUCTS, MODIFY_ORDER, RESET_ORDER
}

export interface AddProductsAction extends Action<ACTIONS.ADD_PRODUCTS> { 
    payload: Product[]
}

export interface ModifyOrderAction extends Action<ACTIONS.MODIFY_ORDER> {
    payload: {
        product: Product, 
        quantity: number
    }
}

export interface ResetOrderAction extends Action<ACTIONS.RESET_ORDER> {}

export type StoreAction = AddProductsAction | ModifyOrderAction | ResetOrderAction;
