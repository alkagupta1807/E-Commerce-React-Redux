import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";

const initialState={
    upload_message:"idle",
    allDetails:{},
}
export const showDetails=createAsyncThunk(
    "/profileDetails",async(formData)=>{
        let res=await axiosInstance.get(`/user/profile-details`,formData);
        let resData=res?.data;
        return resData;
    }
)

export const userProfileSlice=createSlice({
    name:"userProfile",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(showDetails.pending,(state)=>{
            state.upload_message="loading"
        })
        .addCase(showDetails.fulfilled,(state,{payload})=>{
            state.allDetails=payload;
        })
        .addCase(showDetails.rejected,(state)=>{
            state.upload_message="idle";
        })
    }
})
export default userProfileSlice.reducer;