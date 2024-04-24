import { configureStore } from '@reduxjs/toolkit'
import productreducer from './slices/productsslice'
import cartreducer from './slices/cartslice'


export const store = configureStore({
  reducer: {
    products:productreducer,
    cart:cartreducer
  },
})