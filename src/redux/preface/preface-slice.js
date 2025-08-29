import { createSlice } from "@reduxjs/toolkit";

const prefaceState = {
  visible: true,
};

const prefaceSlice = createSlice({
  name: "preface",
  initialState: prefaceState,
  reducers: {
    disableModal: (store) => {
      store.visible = false;
    },
  },
});

export const { disableModal } =
  prefaceSlice.actions;

export default prefaceSlice.reducer;