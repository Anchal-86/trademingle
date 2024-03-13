import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./reducers";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { contentSlice } from "./contentReducers";

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    content:contentSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
