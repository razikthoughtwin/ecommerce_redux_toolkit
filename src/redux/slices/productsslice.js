import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

import axios from 'axios';


export const fetchproducts = createAsyncThunk(
    'products',
    async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      return response.data
    },
  )


const productslice=createSlice({

    name:"productlisting",
    initialState:{
        productslist:[]
    },
    reducers:{
        // addproducts:(state,action)=>{
        //     state.productslist=action.payload
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchproducts.fulfilled, (state, action) => {
          state.productslist=action.payload
        })
      },
})



export const {addproducts} = productslice.actions;
export default productslice.reducer;