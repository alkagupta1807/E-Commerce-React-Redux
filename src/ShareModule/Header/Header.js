

import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { handleLoggedout, handleredirectContact } from "../../Redux/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { PiHandbagSimpleFill } from "react-icons/pi";
import Userdropdown from "./Userdropdown/Userdropdown";
import { showDetails } from "../../Redux/userProfileSlice";
import {profileDetailsPath} from "../../Helper/Helper";
import Cart from "../../Components/Cart/Cart";
import {toast} from "react-toastify";
import "./Header.css";

const Header = () => {
  const [open,setOpen]=useState(false);
  const [is_loggedIn, setis_loggedIn] = useState("");
  const [have_email, sethave_email] = useState("");
  const Name = localStorage.getItem("first_name");
  const Email = localStorage.getItem("email");
  const { isLoggedIn } = useSelector((state) => state?.contents);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { allDetails,redirectTo } = useSelector((state) => state?.userdetails);
  console.log(isLoggedIn);
  useEffect(() => {
    dispatch(showDetails());
  }, [isLoggedIn]);
  console.log(isLoggedIn);

  useEffect(() => {
    setis_loggedIn(Name);
  }, [Name]);
  useEffect(() => {
    sethave_email(Email);
  }, [Email]);

  const logout = () => {
    dispatch(handleLoggedout())
    navigate("/login")
    toast.success("Logged out Successfully");
  };
  const totalQuantity=useSelector((state)=>state?.cart.totalQuantity)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light  fixed_navbar"  >
        <div className="container">
          <Link to="/" className="navbar-brand">
            
              <PiHandbagSimpleFill
                style={{fontSize:"larger", padding: "2px", marginBottom: "2px" }}
              />
              <span  style={{color:"#e75480"}}>Fashion</span>Freaks
            
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
             
              <li className="nav-item">
                <a className="nav-link">
                  
                  <NavLink className="nav_sty" to="/"  exact>
                    Home
                  </NavLink>
                 
                  </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <NavLink className="nav_sty" to="/about">About us</NavLink>
                </a>
              </li>
              <li className="nav-item">
                
                  <a className="nav-link" >
                  <NavLink className="nav_sty" >
                  <div class="dropdown me-3" 
                    >
  <button className="btn dropdown-toggle btn_dropdown_product" type="button" data-bs-toggle="dropdown" 
  aria-expanded="false" id="dropdownMenuButton">
      Products
  </button>
  <ul className="dropdown-menu dropdown_sty"  aria-labelledby="dropdownMenuButton">
   <Link className="dropdown-item" to="/createproduct"> <li>Create Product</li></Link>
   <Link className="dropdown-item" to="/createdProduct" > <li>Show Products</li></Link>
   <Link  className="dropdown-item"  to="/totalproducts/:catId"> <li>Product Categories</li></Link>
    

   
  </ul>
</div>
                    
                    </NavLink>
                  </a>
               
              </li>
              <li className="nav-item">
                
                  <a className="nav-link" >
                  <NavLink className="nav_sty" to="/blog">
                    Blogs
                    </NavLink>
                  </a>
             
              </li>
              <li className="nav-item">
               
                  <a className="nav-link" >
                  <NavLink to="/contact" className="nav_sty">
                    Contact us
                    </NavLink>
                  </a>
                  {/* <img src="" alt="" /> */}
           
              </li>

            
            </ul>
            <div
              
              className="ms-auto"
            >
              <div className="d-flex align-items-center small_screen" >
                {isLoggedIn ? (
                  <>
                    <p className="mb-0 me-3">
                     
                      Welcome, {is_loggedIn} 
                      <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                      <img style={{ width: "40px", height: "40px", borderRadius: "50px" }}
                          src={
                            allDetails?.data?.profile_pic
                              ? profileDetailsPath(
                                  allDetails?.data?.profile_pic
                                  // console.log(allDetails.data.profile_pic)
                                ) 
                              : "error"
                          }
                          alt="profilepicture"
                        />

                      </div>
                    </p>
                    
                    <div class="dropdown me-3" 
                    >
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" 
  aria-expanded="false" id="dropdownMenuButton">
       <FaUserCircle  style={{fontSize:"25px",padding:"2px",textAlign:"center", margin:"4px"}}/>
  </button>
  <ul className="dropdown-menu"  aria-labelledby="dropdownMenuButton">
   <Link className="dropdown-item" to="/profile"> <li>Profile</li></Link>
   <Link className="dropdown-item" to="/account-settings" > <li>Account Settings</li></Link>
   <Link  className="dropdown-item"  to="/orders"> <li>Orders/Transactions</li></Link>
    <li onClick={()=>{ logout();
                      dispatch(handleredirectContact())
                    }}><a className="dropdown-item" style={{cursor:"pointer"}} >Logout</a></li>

   
  </ul>
</div>


<div className="position-relative" onClick={()=>setOpen(!open)}>
                <Link  className="text-dark text-decoration-none" to="/cart">
                  <FaShoppingCart
                    style={{ fontSize: "25px", padding: "2px", marginLeft: "20px" }} 
                    ></FaShoppingCart>
                    <span className="badge bg-danger position-absolute top-0 start-100
                     translate-middle  rounded-pill" >{totalQuantity}
                     <span className="visually-hidden"></span>
                     </span>
                  
                </Link>
              </div>
              
                  </>
                ) : (
                  <>
                    <Userdropdown
                      style={{ fontSize: "25px", marginRight: "1px" }}
                    />
                  </>
                )}
              </div>

             
            </div>
          </div>
          </div>
        

        
      </nav>
     
    </>
  );
};

export default Header;
