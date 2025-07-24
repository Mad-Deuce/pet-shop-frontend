import { createSlice } from "@reduxjs/toolkit";

import { sendFirstOrderThunk } from "./first-order-thunk";

import { pending, rejected } from "/src/shared/lib/redux";

const firstOrderState = {
  loading: false,
  error: null,
  isFirstOrder: true,
};

const firstOrderSlice = createSlice({
  name: "sale",
  initialState: firstOrderState,
  extraReducers: (builder) => {
    builder
      .addCase(sendFirstOrderThunk.pending, pending)
      .addCase(sendFirstOrderThunk.fulfilled, (store) => {
        store.loading = false;
        store.isFirstOrder = false;
      })
      .addCase(sendFirstOrderThunk.rejected, rejected)
  },
});

export default firstOrderSlice.reducer; 