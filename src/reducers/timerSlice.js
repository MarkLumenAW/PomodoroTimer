import { createSlice } from "@reduxjs/toolkit";

export const defaultSessionLength = 25;
export const defaultBreakLength = 5

const timerSlice = createSlice({
  name: "timer",
  initialState: {
    timerDisplay: defaultSessionLength * 60000,
    timerLabel: "Session",
    sessionLength: defaultSessionLength,
    breakLength: defaultBreakLength,
    runningState: false,
  },
  reducers: {
    updateTimerDisplay: (state, action) => {
      state.timerDisplay = action.payload.value;
    },
    updateTimerLabel: (state, action) => {
      state.timerLabel = action.payload.value;
    },
    updateSessionLength: (state, action) => {
      state.sessionLength = action.payload.value;
    },
    updateBreakLength: (state, action) => {
      state.breakLength = action.payload.value;
    },
    updateRunningState: (state, action) => {
      state.runningState = action.payload.value;
    },
  }
});

export const { updateTimerDisplay, updateTimerLabel, updateSessionLength, updateBreakLength, updateRunningState } = timerSlice.actions;
export const timerReducer = timerSlice.reducer;