import { createAsyncThunk } from "@reduxjs/toolkit";

import { sendOrderApi } from "/src/shared/api/orderApi";

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


