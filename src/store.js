import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/CartSlice'; // Adjust the import path as necessary

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
