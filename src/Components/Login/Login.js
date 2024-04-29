import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn, reset_redirectContact } from "../../Redux/authSlice";
import { Link } from "react-router-dom";
import "./Login.css";
import {toast} from "react-toastify";
export default function Login() {
  const { redirectTo, redirectContact, isInRegistration,isLoggedIn } = useSelector(
    (state) => state.contents
  );
  const dispatch = useDispatch();
  const [myName, setMyName] = useState("");
  const myname = localStorage.getItem("first_name");

  useEffect(() => {
    setMyName(myname);
  }, [myname]);

  const navigate = useNavigate();

  const initialValues = { email: "", password: "" };
  const [user, setUser] = useState(initialValues);
  const [error, setError] = useState({});
  

  const validate = () => {
    let error = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regex1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!user.email) {
      error.email = "Email is required";
    } else if (!regex.test(user.email)) {
      error.email = "This is not a valid email format";
    }
    if (!user.password) {
      error.password = "Password is required";
    } else if (!regex1.test(user.password)) {
      error.password = "This is not a valid password format";
    }
    return error;
  };
  
  const handleChange = (e) => {
    let name,value
    name=e.target.name;
    value=e.target.value
   if(name==="email"){
    if(value.length===0){
      setUser({...user,email:""})
      setError({...error,email:" Valid Email is required"})
    }
    else{
      setUser({...user,email:value})
      setError({...error,email:""})
    }
   }
   if(name==="password"){
    if(value.length===0){
      setUser({...user,password:""})
      setError({...error,password:"Valid Password is required"})
    }
    else{
      setUser({...user,password:value})
      setError({...error,password:""})
    }
   }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate());
    console.log(e);
    let data = {
      email: user.email,
      password: user.password,
    };
  dispatch(logIn(data))
    
   
  }

  const RedirectUser = () => {
    let token = localStorage.getItem("token");
    let isInLoginPage = window.location.pathname.toLowerCase() === "/login";
    if (token !== null && token !== undefined && token !== "") {
      isInLoginPage && navigate("/");
      toast.success("Logged in Successfully")
      
    }
  };
  useEffect(() => {
    RedirectUser();
  }, [redirectTo]);
  console.log(redirectTo);

  useEffect(() => {
    dispatch(reset_redirectContact(null));
  }, [redirectContact]);
  // console.log(redirectContact);
  

  return (
    <>
      <div className="login">
        <form className="submit_form"  action="" >
          <h1 className="header_style">Login</h1>
          <div className="formInput_1 form-group">
            <label className="label_1">Email:</label>
            <input
              className="input_field  form-control"
              type="email"
              name="email"
              value={user?.email}
              onChange={handleChange}
             
            />
             {console.log(handleChange)}
            <span style={{color:"red"}}>{error?.email}</span>
          </div>
          <div className="formInput_1 form-group">
            <label className="label_1">Password:</label>
            <input
              className="input_field form-control"
              type="password"
              name="password"
              value={user?.password}
              onChange={handleChange}
            />
            <span style={{color:"red"}}>{error?.password}</span>
          </div>
          <button type="submit" className="submit_button" onClick={handleSubmit}>Submit{console.log(handleSubmit)}
          </button>
          <p className="p_notify">
            New to FashionFreaks?
            {" "}<Link to="/register">Sign Up</Link>
          </p>
        </form>
      </div>

      
    </>
  );
}
