import { createSlice } from '@reduxjs/toolkit';


// create todo slice
export const todoSlice = createSlice({
    name: "todo",
    initialState: ["alo", "potol", "law"],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        removeTodo: (state, action) => {
            return state.filter(data => data !== action.payload);
        }
    }
});

// export
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
