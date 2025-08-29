import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart-slice.js";
import firstOrderReducer from "./first-order/first-order-slice.js";
import prefaceReducer from "./preface/preface-slice.js";

const rootReducer = combineReducers({
    cart: cartReducer,
    isFirstOrder: firstOrderReducer,
    preface: prefaceReducer,
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart", "isFirstOrder"],
};

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export default persistedRootReducer;