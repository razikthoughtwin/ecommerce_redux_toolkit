import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
  name: "cart",
  initialState: {
    cartitems: [],
  },
  reducers: {
    addtocart: (state, action) => {
        let x={...action.payload,quantity:0}
        console.log(x);
        state.cartitems.push(action.payload)
    },
    removecartitem:(state,action)=>{
        // console.log("removeiyems",action.payload)
        // console.log(state.cartitems)
        return {cartitems:state.cartitems.filter((item)=>item.id!==action.payload)}
    }
  },
});

export const { addtocart,removecartitem } = cartslice.actions;
export default cartslice.reducer;
