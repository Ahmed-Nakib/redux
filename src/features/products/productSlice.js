import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const  initialState = {
    products: [],
    isLoading: false ,
    error: null,
    }

const BASE_URL = "http://localhost:3000/products";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async() => {
  const res = await axios.get(BASE_URL)
  return res.data;
  })

export const deleteProduct = createAsyncThunk("products/deleteProduct", async(id) => {
  await axios.delete(`${BASE_URL}/${id}`)
  return id;
  })

export const createProduct = createAsyncThunk("products/createProduct", async(product) => {
  const res = await axios.delete(BASE_URL, product)
  console.log(res);
  
  })


const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    }) 
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload
      state.error = null;
    }) 
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.products = [];
      state.error = action.error.message;
    }) 
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.products = state.products.filter((product) => product.id != action.id)
    }) 
  }
  });

  export default productSlice.reducer;