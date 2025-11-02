import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  products: [],
  isLoading: false,
  error: null,
};


const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
 
  },
);

export default productSlice.reducer;
