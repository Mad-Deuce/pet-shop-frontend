import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [
    {
      "id": 1,
      "title": "BELCANDO Mini Dog Food",
      "price": 35,
      "discont_price": 23,
      "description": "Versatile selection: discover the culinary world for your little four-legged friend with 2 types of dry food and 6 types of wet food. So there is something for every taste. High acceptance: our balanced formula is rich in essential nutrients, vitamins and minerals and is tailored to the needs of small dog breeds. An all-round supply that leaves nothing to be desired. Dry food: Finest GF Lamb - easily digestible and a croquette coated with instant sauce for extra taste. Finest Croc - rich in meat and with grape seed flour. Wet food: you will receive a selection of different types of wet food from our range: single protein chicken, single protein buffalo, duck with rice and cranberries, rabbit with millet and sweet potato, lamb with rice and tomatoes and chicken/duck with millet and potatoes. Made in Germany: Our feed is manufactured under the strictest quality standards in Germany and contains no artificial additives. All meat products used come from food-safe animals.",
      "image": "/product_img/1.jpeg",
      "createdAt": "2022-10-02T14:43:29.000Z",
      "updatedAt": "2022-10-02T14:43:29.000Z",
      "categoryId": 1,
      count: 2
    },
    {
      "id": 1,
      "title": "BELCANDO Mini Dog Food",
      "price": 35,
      "discont_price": 23,
      "description": "Versatile selection: discover the culinary world for your little four-legged friend with 2 types of dry food and 6 types of wet food. So there is something for every taste. High acceptance: our balanced formula is rich in essential nutrients, vitamins and minerals and is tailored to the needs of small dog breeds. An all-round supply that leaves nothing to be desired. Dry food: Finest GF Lamb - easily digestible and a croquette coated with instant sauce for extra taste. Finest Croc - rich in meat and with grape seed flour. Wet food: you will receive a selection of different types of wet food from our range: single protein chicken, single protein buffalo, duck with rice and cranberries, rabbit with millet and sweet potato, lamb with rice and tomatoes and chicken/duck with millet and potatoes. Made in Germany: Our feed is manufactured under the strictest quality standards in Germany and contains no artificial additives. All meat products used come from food-safe animals.",
      "image": "/product_img/1.jpeg",
      "createdAt": "2022-10-02T14:43:29.000Z",
      "updatedAt": "2022-10-02T14:43:29.000Z",
      "categoryId": 1,
      count: 5,
    },
  ],
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