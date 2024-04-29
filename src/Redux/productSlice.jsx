import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";

const initialState={
  upload_message:"idle",
  productList:[],
  totalNoOfPage:"",
  researchDetailsData:[],
 



}
export const createProduct=createAsyncThunk(
    "/createProduct",async(formData)=>{
        let res=await axiosInstance.post("/product/create",formData);
        let resData=res?.data;
        return resData;
    }
)
export const productListDetails=createAsyncThunk(
    "/productList",async(formData)=>{
        let res=await axiosInstance.post(`/product/list`,formData);
        let resData=res?.data;
        return resData;
    }
)
export const editList=createAsyncThunk(
    "/edit",async(id)=>{
        let res=await axiosInstance.get(`/product/detail/${id}`);
        let resData=res?.data;
        return resData;
    }
) 
export const editProduct=createAsyncThunk(
    "/update",async(formData)=>{
        let res=await axiosInstance.post(`/product/update`,formData);
        let resData=res?.data;
        return resData;
    }
)
export const deleteProduct=createAsyncThunk(
    "/delete",async(productId)=>{
        let res=await axiosInstance.post(`/product/remove`,{id:productId});
        let resData=res?.data;
        return resData;
    }
)
export const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(createProduct.pending,(state)=>{
                    state.upload_message="loading"
        })
        .addCase(createProduct.fulfilled,(state,{payload})=>{
            state.upload_message="fulfilled"
        })
        .addCase(createProduct.rejected,(state)=>{
            state.upload_message="idle"
        })
        .addCase(productListDetails.pending,(state)=>{
            state.upload_message="loading"
        })
        .addCase(productListDetails.fulfilled,(state,{payload})=>{

            state.upload_message="fulfilled";
            state.productList=payload?.data;
            state.totalNoOfPage=payload?.totalPages;
        })
        .addCase(productListDetails.rejected,(state,{payload})=>{
            state.upload_message="rejected";
        })
        .addCase(editList.pending,(state)=>{
            state.upload_message="loading";
        })
        .addCase(editList.fulfilled,(state,{payload})=>{
            state.researchDetailsData=payload?.data;
        })
        .addCase(editList.rejected,(state,{payload})=>{
            state.upload_message="rejected";
        })
        .addCase(editProduct.pending,(state)=>{
            state.upload_message="loading";
        })
        .addCase(editProduct.fulfilled,(state,{payload})=>{
         state.upload_message="fulfilled";
        })
        .addCase(editProduct.rejected,(state)=>{
            state.upload_message="rejected";
        })
        .addCase(deleteProduct.pending,(state)=>{
            state.upload_message="loading";
        })
        .addCase(deleteProduct.fulfilled,(state,{payload})=>{
            state.upload_message="fulfilled";
           
        })
        .addCase(deleteProduct.rejected,(state)=>{
            state.upload_message="rejected";
        })
     }
})
export default productSlice.reducer;