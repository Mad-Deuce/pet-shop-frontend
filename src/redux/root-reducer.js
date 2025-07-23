import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart-slice.js";

const rootReducer = combineReducers({
    cart: cartReducer
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"],
};

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export default persistedRootReducer;