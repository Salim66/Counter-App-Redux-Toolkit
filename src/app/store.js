import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/counter/counterSlice';

// create RTK store
const store = configureStore({
    reducer: {
        counter: counterSlice
    }
});

// export 
export default store;