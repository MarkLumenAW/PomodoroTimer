import { configureStore } from "@reduxjs/toolkit";
import { timerReducer } from "../reducers/timerSlice";

export const store = configureStore({
  reducer: {
    timer: timerReducer,
  }
})