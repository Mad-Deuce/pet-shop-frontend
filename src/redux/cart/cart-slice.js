import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (store, { payload }) => {
      const product = store.find((item) => item.id === payload.id);
      if (product) {
        product.count += 1;
      } else {
        store.push({ ...payload, count: 1 });
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
    deleteFromCart: (store, { payload }) =>
      store.filter((item) => item.id !== payload),
  },
});

export const { addToCart, increaseInCart, decreaseInCart, deleteFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;