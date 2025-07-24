import { createAsyncThunk } from "@reduxjs/toolkit";

import { saleSendApi } from "/src/shared/api/salesApi";

export const sendFirstOrderThunk = createAsyncThunk(
    "first-order/send",
    async (data, { rejectWithValue }) => {
        try {
            const payload = await saleSendApi(data);
            return payload;
        }
        catch (error) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
)


