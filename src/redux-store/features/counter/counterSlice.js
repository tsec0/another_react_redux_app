import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    value: 0 
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1; // immer library (mutating/changing will not work in pure react)
        },
        decrement: (state) => {
            state.value -= 1 // 
        }
    }
})

export const {increment, decrement} = counterSlice.actions; // actions!!!

export default counterSlice.reducer;
