import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  value: 0,
};

// Create the slice
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    multiply: (state) => {
      state.value *= 2;
    },
  },
});

// Export the action creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export the reducer
export default counterSlice.reducer;
