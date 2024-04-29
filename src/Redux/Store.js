import { configureStore } from "@reduxjs/toolkit";
import { authenticationSlice } from "./authSlice";
import {userProfileSlice }from "./userProfileSlice";
import { productSlice } from "./productSlice";

import cartSlice from "./cartSlice"

export const store=configureStore({
    reducer:{
        contents:authenticationSlice.reducer,
         
        userdetails:userProfileSlice.reducer,
        productdetails:productSlice.reducer,
           cart:cartSlice,
    }
})


