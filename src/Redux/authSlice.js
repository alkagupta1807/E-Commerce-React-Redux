import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";

const initialState={
    
    upload_message:"idle",
    redirectContact:null,
    redirectTo:null,
    isLoggedIn:false,
    isInRegistration:false,
    

}

export const register=createAsyncThunk(
    "/register",
    async(formData)=>{
        let res=await axiosInstance.post("/user/signup",formData);
        let resData=res?.data;
        return resData;
    }
)

export const logIn=createAsyncThunk(
    "/login",
    async(formData)=>{
        let res=await axiosInstance.post("/user/signin",formData);
        let resData=res?.data;
        return resData;
    }
)


export const authenticationSlice=createSlice({
    name:"authentication",
    initialState,
    reducers:{
        reset_redirectTo:(state,{payload})=>{
            state.redirectTo=payload;
            console.log(state.redirectTo);
            console.log(payload);
        },
        check_token:(state,{payload})=>{
            let token=localStorage.getItem("token");
            if(token!==null && token!==undefined){
                state.isLoggedIn=true;
            }
        },
        handleLoggedout:(state,{payload})=>{
            localStorage.removeItem("token");
            state.isLoggedIn=false;
        },
        reset_redirectContact:(state,{payload})=>{
            state.redirectContact=payload;
        },
        check_myname:(state,{payload})=>{
            let name=localStorage.getItem("first_name");
            if(name!==null && name!==undefined){
                state.isInRegistration=true;
            }
        },
        handleredirectContact:(state,{payload})=>{
            localStorage.removeItem("first_name");
            state.isInRegistration=false;  
    }
},
extraReducers:(builder)=>{
    builder
    .addCase(logIn.pending,(state,{payload})=>{
        state.status="loading";

    })
    .addCase(logIn.fulfilled,(state,{payload})=>{
       if(payload.status===200){
        state.status="idle";

        localStorage?.setItem("token",payload?.token)
        localStorage?.setItem("first_name",payload?.data.first_name)
        localStorage?.setItem("email",payload?.data.email)
        state.redirectTo='/'
        state.isLoggedIn=true;
       
       }
     
  else{
    state.redirectTo="/login";
    state.isLoggedIn=false;
  }
    })
    .addCase(logIn.rejected,(state,payload)=>{
        state.status="idle";
    })
    .addCase(register.pending,(state,payload)=>{
        state.upload_message="loading";
    })
    .addCase(register.fulfilled,(state,{payload})=>{
        if(payload.status===200){
        state.upload_message="idle";
        localStorage?.setItem("first_name",payload?.data.first_name);
        // localStorage?.setItem("profile_pic",payload?.data.profile_pic);
        
        state.isInRegistration=true;
        state.redirectContact="/login";
        }
        else{
            state.isInRegistration=false;
            state.redirectContact="/register"
        }
    })
    .addCase(register.rejected,(state,payload)=>{
        state.status="idle";
    })
    
}
})

export const {reset_redirectTo,reset_redirectContact,check_token,
    check_myname,handleLoggedout,handleredirectContact}=authenticationSlice.actions;