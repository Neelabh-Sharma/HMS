import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './apiSlice';

const store = configureStore({
    reducer: {
        api: apiReducer, // Integrate the API slice
    }, // Add your reducers here
});

export default store;
