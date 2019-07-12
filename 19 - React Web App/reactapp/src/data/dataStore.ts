import { createStore, Store } from "redux";
import { StoreReducer } from "./reducer";
import { StoreData, StoreAction } from "./types";

export const dataStore: Store<StoreData, StoreAction> = createStore(StoreReducer);
