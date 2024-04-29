import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../Redux/authSlice';
import "./Register.css";

import {toast} from "react-toastify"




export default function Register ()  {
  
  
  const {redirectContact}=useSelector((state)=>state.contents);
  const dispatch=useDispatch();
 
 const initialValues={first_name:"",last_name:"",email:"",password:""};
const [user,setUser]=useState(initialValues);
const [error,setError]=useState({});

const [isSignInForm,setIsSignInForm]=useState(true);
const [profile_pic,setProfile_pic]=useState(null);
  const navigate=useNavigate();

  const validate=()=>{
    let error={};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const regex1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  if(!user.first_name){
    error.first_name="First name is required";
  }
  if(!user.last_name){
    error.last_name="Last name is required";
  }
  if(!user.email){
    error.email="Email is required";
  }
  else if(!regex.test(user.email)){
    error.email="This is not a valid email format";
  }
  if(!user.password){
    error.password="Password is required";
  }
  else if(!regex1.test(user.password)){
    error.password="This is not a valid password format";
  }
  
  return error;
  }


  // const handleChange=(e)=>{
  //   const {name,value}=e.target;
  //   setFormValues({...formValues,[name]:value});
  // }
  let name,value;
  const handleChange=(e)=>{
    name=e.target.name;
    value=e.target.value;
if(name==="first_name"){
  if(value.trim().length===0){
    setUser({...user,first_name:""});
    setError({...error,first_name:"First Name is required"})
  }
  else{
  setUser({...user,first_name:value});
  setError({...error,first_name:""})
  }
}
if(name==="last_name"){
  if(value.trim().length===0){
    setUser({...user,last_name:""});
    setError({...error,last_name:"Last name is required"})
  }
  else{
    setUser({...user,last_name:value});
    setError({...error,last_name:""})
  }
}
if(name==="email"){
  if(value.trim().length===0){
    setUser({...user,email:""});
    setError({...error,email:" Valid Email is required "})
  }
  else{
    setUser({...user,email:value});
    setError({...error,email:""})
  }
}
if(name==="password"){
  if(value.trim().length===0){
    setUser({...user,password:""});
    setError({...error,password:"Valid Password is required"})
  }
  else{
    setUser({...user,password:value});
    setError({...error,password:""})
  }

}

  }

  const handleImageChange=(e)=>{
    
    setProfile_pic(e.target.files[0]);
  }

 
 

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newerrors=validate(user)
    // setError(newerrors);
    setError(validate())
    let formData=new FormData();
    formData.append("first_name",user?.first_name);
    formData.append("last_name",user?.last_name);
   formData.append("profile_pic",profile_pic);
    formData.append("email",user?.email);
   
    formData.append("password",user?.password)
    // const newerrors=validate(formData)
    // setError(newerrors);
  //  if(Object.keys(error).length===0){
    dispatch(register(formData))
  //  }
    
    };
 
 


  const RedirectUser=()=>{
    let first_name=localStorage.getItem("first_name");
    let isInContactPage=window.location.pathname.toLowerCase()==="/register"

    if(first_name!==null && first_name!==undefined && first_name!==""){
        isInContactPage && navigate("/login");
    } 
  };
  useEffect(()=>{
    RedirectUser();
  },[redirectContact])
  console.log(redirectContact);
  
  return (
    
    
    
    
   
    
    <>
    <div className="register">
      
      <form className="submit_form" method="post" action="#">
        <h1 className="header_style">Register</h1>
        <div className="formInput_1 form-group">
            <label className="label_1" for="">First Name:</label>
            <input className="input_field" type="text" name="first_name"
             value={user?.first_name}
             onChange={(e)=>handleChange(e)} />
            <span style={{ color: "red" }}>{error?.first_name}</span>
           {console.log(error?.first_name)}
        </div>
        <div className="formInput_1 form-group">
            <label className="label_1" for="">Last Name:</label>
            <input className="input_field" type="text" name="last_name"
             value={user?.last_name}
             onChange={(e)=>handleChange(e)} />
            <span style={{ color: "red" }}>{error?.last_name}</span>
        </div>
        <div className="formInput_1 form-group">
            <label className="label_1">Email:</label>
            <input className="input_field" type="email" name="email"
             value={user?.email}
             onChange={(e)=>handleChange(e)} />
            <span style={{ color: "red" }}>{error?.email}</span>
        </div>
        <div className="formInput_1 form-group">
            <label className="label_1">Password:</label>
            <input className="input_field" type="password" name="password"
             value={user?.password}
             onChange={(e)=>handleChange(e)} />
            <span style={{ color: "red" }}>{error?.password}</span>
        </div>
        <div className="formInput_1 form-group">
            <label className="label_1">Image:</label>
            <input className="input_field" type="file" name="image" accept="image/*"
            
             onChange={(e)=>handleImageChange(e)} />
             
          
        </div>

        <button className="submit_button" onClick={handleSubmit}>Submit</button>
       
        <p className="notify_p">Already registered?{"  "}<Link to="/login">Sign In </Link></p>
      </form>
    </div>
    </>
  );
}



  


