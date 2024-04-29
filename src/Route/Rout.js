import React ,{Suspense,lazy, useEffect}from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router,Routes,Route, Navigate } from "react-router-dom";
import { check_myname, check_token } from "../Redux/authSlice";
import CreateProduct from "../Components/Products/CreateProduct";


import ProductDetails from "../Components/Products/ProductDetails";
import UpdateProduct from "../Components/Products/UpdateProduct";

import Finalproductdetail from "../pages/Finalproductdetail";
import Cart from "../Components/Cart/Cart";
import TotalProducts from "../Components/TotalProducts/TotalProducts";

import "./Rout.css"
import { toast } from "react-toastify";




const Home = lazy(() => import("../Components/Home/Home"));
const About=lazy(()=>import("../Components/About/About"));
const Blog=lazy(()=>import ("../Components/Blog/Blog"));

const Contact=lazy(()=>import ("../Components/Contact/Contact"));
const Header=lazy(()=>import ("../ShareModule/Header/Header"));
const Footer=lazy(()=>import("../ShareModule/Footer/Footer"));
const Login=lazy(()=>import("../Components/Login/Login"));
const Register=lazy(()=>import ("../Components/Register/Register"))



 
export default function Rout(){
   
    const dispatch=useDispatch();
    const publicRouteNames=[
        {
            path:"/register",
            Component:<Register/>
        },
        {
            path:"/login",
            Component:<Login/>
        },
        
    ]
    const privateRouteNames=[
        {
            path:"/",
            Component:<Home/>
        },
        {
            path:"/about",
            Component:<About/>
        },
        {
            path:"/blog",
            Component:<Blog/>
        },
        {
            path:"/contact",
            Component:<Contact/>
        },
        {
            path:"/createproduct",
            Component:<CreateProduct/>
        },
        {
            path:"/product/detail/:id",
            Component:<UpdateProduct/>
        },
        {
            path:"/createdProduct",
            Component:<ProductDetails/>
        },
        {
            path:"/totalproducts/:catId",
            Component:<TotalProducts/>
        },
        {
            path:"/myproduct/:id",
            Component:<Finalproductdetail/>
        },
        {
            path:"/cart",
            Component:<Cart/>
        },
       
       
        
        
    ]
    useEffect(()=>{
        dispatch(check_token())
        dispatch(check_myname())
    },[dispatch])
    // const isAuthenticated = localStorage.getItem("token") || sessionStorage.getItem("token");

    function PrivateRoute({children}){
        const token =
        localStorage.getItem("token") || sessionStorage.getItem("token");
        
    
      return token !== null && token !== undefined  ? (
        children
      ) : (<>
        {toast.success("Please login first")}
      <Navigate to="/login" />
         </>
      ); 
    // if (token==null && token==undefined ) {
    //     toast.error("Please login first");
    //     return ; // Prevent rendering of children
    //   }
    
    //   return children;
    }
    
  return (
      <>
      <Suspense fallback = {<div className="loader"></div>}>
           <Router>
               <Header />
               <Routes>
                  {publicRouteNames?.map((route, index) => {
                      return (
                          <Route key={index + 1}
                              exact path={route.path} element={route.Component}>
                          </Route>
                      );
                  })}
                       {/*************  protected routes ********************/}
                       {
                  privateRouteNames?.map((route, index) => {
                       return (
                          <Route
                            key={index + 2}
                            exact path={route.path}
                            element={<PrivateRoute>{route.Component}</PrivateRoute>}
                          />
                        )
                  
                  })

                  }     
               </Routes>
               
             <Footer /> 
              
           </Router>
       </Suspense>
       </>
   )

}
    


