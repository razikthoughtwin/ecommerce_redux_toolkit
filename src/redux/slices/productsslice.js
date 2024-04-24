import {createSlice} from '@reduxjs/toolkit'


const productslice=createSlice({

    name:"productlisting",
    initialState:{
        productslist:[]
    },
    reducers:{
        addproducts:(state,action)=>{
            state.productslist=action.payload
        }
    }
})

export const {addproducts} = productslice.actions;
export default productslice.reducer;