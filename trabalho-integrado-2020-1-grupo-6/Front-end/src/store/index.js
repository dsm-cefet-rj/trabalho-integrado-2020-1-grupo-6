import { createStore } from "redux";
import { reducer, initialState } from "./reducer.js";

console.log(initialState);
export const store = createStore(reducer, initialState);
