import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slice/productSlice';
import categoryReducer from './slice/categorySlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    categories: categoryReducer,
  },
});

// Define RootState dan AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
