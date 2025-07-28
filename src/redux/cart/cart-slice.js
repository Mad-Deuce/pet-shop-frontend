import { createSlice } from "@reduxjs/toolkit";

import { sendOrderThunk } from "./cart-thunk";

import { pending, rejected } from "/src/shared/lib/redux";

const cartState = {
  loading: false,
  error: null,
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    addToCart: (store, { payload }) => {
      const product = store.products?.find((item) => item.id === payload.id);
      console.log(product, " payload", payload);

      if (product) {
        product.count += 1;
      } else {
        store.products?.push({ ...payload, count: 1 });
      }
    },
    increaseInCart: (store, { payload }) => {
      const product = store.find((item) => item.id === payload);
      product.count += 1;
    },
    decreaseInCart: (store, { payload }) => {
      const index = store.findIndex((item) => item.id === payload);
      store[index].count -= 1;
      if (!store[index].count) {
        store.splice(index, 1);
      }
    },
    updateInCart: (store, { payload }) => {
      const product = store.products?.find((item) => item.id === payload.id);
      if (product) {
        product.count = payload.count;
      } else {
        store.products.push({ ...payload });
      }
    },
    deleteFromCart: (store, { payload }) =>
      store.products.filter((item) => item.id !== payload),
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendOrderThunk.pending, pending)
      .addCase(sendOrderThunk.fulfilled, (store) => {
        store.loading = false;
        store.products = [];   // Attention
      })
      .addCase(sendOrderThunk.rejected, rejected)
  },
});

export const { addToCart, increaseInCart, decreaseInCart, deleteFromCart, updateInCart } =
  cartSlice.actions;

export default cartSlice.reducer;