import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './redux/cart/cartSlice';
import userReducer from './redux/user/userSlice';

 const store = configureStore({
    reducer:{
      cart:cartReducer,
      user:userReducer
    }
})

export default store;

