import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/counter/counterSlice';
import todoSlice from '../features/todo/todoSlice';

// create RTK store
const store = configureStore({
    reducer: {
        counter: counterSlice,
        todos: todoSlice
    }
});

// export 
export default store;