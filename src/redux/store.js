import { configureStore } from "@reduxjs/toolkit";
import wishListReducer from "./slices/wishlist";
const store = configureStore({
    reducer:{
        wishList:wishListReducer,
    }
})

export default store;