import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer.js";

export const store = configureStore({
  reducer: reducer,
});
