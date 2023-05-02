import { createSlice } from '@reduxjs/toolkit';


// create todo slice
export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: ["alo", "potol", "law"]
    },
    reducers: {
        addTodo: (state, { type, payload }) => {
            state.todos.push(payload);
        },
        removeTodo: (state, { type, payload }) => {
            state.todos = state.todos.filter(data => data !== payload);
        }
    }
});

// export
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
