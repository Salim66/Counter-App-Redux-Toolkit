import { createSlice } from '@reduxjs/toolkit';

// create counter slice
export const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increment: (state, action) => {
            return state += 1;
        },
        decrement: (state, action) => {
            return state -= 1;
        },
        reset: (state, action) => {
            return state = 0;
        },
        randNumber: (state, action) => {
            return state = action.payload;
        },
    }
});

// export 
export const { increment, decrement, reset, randNumber } = counterSlice.actions;
export default counterSlice.reducer;