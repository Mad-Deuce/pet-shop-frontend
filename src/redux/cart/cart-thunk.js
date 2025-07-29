import { createAsyncThunk } from "@reduxjs/toolkit";

import { sendOrderApi } from "/src/shared/api/orderApi";
import { getProductsByIdsApi } from "/src/shared/api/productsApi";

export const sendOrderThunk = createAsyncThunk(
    "order/send",
    async (data, { rejectWithValue }) => {
        try {
            const payload = await sendOrderApi(data);
            return payload;
        }
        catch (error) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
)

export const syncCartThunk = createAsyncThunk(
    "cart/sync",
    async (data, { rejectWithValue }) => {
        try {
            const payload = await getProductsByIdsApi(data.productsIds);
            return payload;
        }
        catch (error) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
)


