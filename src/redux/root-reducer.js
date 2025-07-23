import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart-slice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: []
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);

const rootReducer = combineReducers({
    cart: persistedCartReducer
});

export default rootReducer;