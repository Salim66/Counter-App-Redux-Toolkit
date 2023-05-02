import { createSlice } from '@reduxjs/toolkit';

// create counter slice
export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state, action) => {
            state.count = state.count + 1;
        },
        decrement: (state, action) => {
            state.count = state.count - 1;
        },
        reset: (state, action) => {
            state.count = 0;
        },
        randNumber: (state, action) => {
            state.count = action.payload;
        },
    }
});

// export 
export const { increment, decrement, reset, randNumber } = counterSlice.actions;
export default counterSlice.reducer;