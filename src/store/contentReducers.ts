import { createSlice } from "@reduxjs/toolkit";
import { initialContentStateType } from "./types";

export const initialContentState: initialContentStateType = {
  price: 0,
};

export const contentSlice = createSlice({
  name: "content",
  initialState: initialContentState,
  reducers: {
    //1st reducer
    setPrice(state, action) {
      state.price = action.payload;
    },
  },
});

export default contentSlice.reducer;
export const { setPrice } = contentSlice.actions;
