import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice"
import { productsApi } from "../services/productsApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer:{
     [productsApi.reducerPath]: productsApi.reducer,
     productsR: productReducer,
    },
    
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

setupListeners(store.dispatch)

export default store;