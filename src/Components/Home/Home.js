// import React ,{useEffect}from 'react'
// import {useDispatch,useSelector} from "react-redux";
// import {  reset_redirectTo } from '../../Redux/authSlice';

// export default function Home(){
//   const {redirectTo} =useSelector((state)=>state.contents);
//   const dispatch=useDispatch();
//   useEffect(()=>{
//     dispatch(reset_redirectTo(null))
//   },[redirectTo])
//   return(
//     <>
//     <h3 >This is my home page</h3>
//     </>

//   )
// }

import React, { useState,useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux";
 import {  reset_redirectTo } from '../../Redux/authSlice';
 import products from '../../assets/data/products';
 import timer_img1 from "../../assets/images/timer_img1.png";
 import { FaCircleArrowUp } from "react-icons/fa6";
//  import AOS from 'aos';
// import 'aos/dist/aos.css';

import "./Home.css";

import Categories from '../Categories/Categories';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import TopBrandsCarousel from '../TopBrandsCarousel/TopBrandsCarousel';
import Clock from "../Clock/Clock"
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";



const Home = () => {
  const {redirectTo} =useSelector((state)=>state.contents);
  const dispatch=useDispatch();
  useEffect(()=>{
   dispatch(reset_redirectTo(null))
 },[redirectTo])


 
 const [isVisible,setIsVisible]=useState(false);
 const year=new Date().getFullYear();
 
const handleScroll=()=>{
  if(window.scrollY>=window.innerHeight){
    setIsVisible(true)

  }
  else{
    setIsVisible(false)
  }
}
const scrollToTop=()=>{
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  })
}
useEffect(()=>{
  window.addEventListener("scroll",handleScroll);
  return()=>{
window.removeEventListener("scroll",handleScroll)
  }
},[])


  return (
 <>

<div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner ">
    <div className="carousel-item active">
      <div className="banner" style={{backgroundImage:"url(images/etherealethnic.jpg)"}} >
      {/* <div className="banner"> */}
      {/* <img className="img-fluid" src="images/biba_banner.png" alt=""/> */}
      <div className="carousel-caption">
        <h2>Ethereal  <span>Ethnicwear</span></h2>
        <h3>Flat 55% off*</h3>
        <p><a href="#">Shop Now</a></p>
        </div>
        
      
    </div>
    </div>
    <div className="carousel-item">
    <div className="banner" style={{backgroundImage:"url(images/classydress-1.jpg)"}}></div>
    <div className="carousel-caption">
        <h2>Classy<span>Dresses</span></h2>
        <h3>Upto 40% off*</h3>
        <p><a href="#">Shop Now</a></p>
      </div>
    </div>
    <div className="carousel-item">
    <div className="banner" style={{backgroundImage:"url(images/about_us.jpg)"}}></div>
    <div className="carousel-caption">
        <h2>Sieze the<span>Savings</span></h2>
        <h3>Min 30% off*</h3>
        <p><a href="#">Shop Now</a></p>
      </div>
      
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" 
  data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


<FeaturedProducts data-aos="fade-right" type="featured"/>
<Categories/>
{/* <FeaturedProducts type="trending"/> */}
<section id="feature_all" className="section-p1">
        <div className="feature_title"><h1>Our Specialities</h1></div>
        <div id="feature">
        <div className="fe-box">
          <img src="images/free_shipping.png" className="img-fluid" alt="" />
          <h6>Free Shipping</h6>
        </div>
        <div className="fe-box">
          <img src="images/online_order.png" alt="" />
          <h6>Online Order</h6>
        </div>
        <div className="fe-box">
          <img src="images/save_money.png" alt="" />
          <h6>Save Money</h6>
        </div>
        <div className="fe-box">
          <img src="images/promotions.png" alt="" />
          <h6>Promotions</h6>
        </div>
        <div className="fe-box">
          <img src="images/happy_sell.png" alt="" />
          <h6>Happy Sell</h6>
        </div>
        <div className="fe-box">
          <img src="images/247support.png" alt="" />
          <h6>24/7 Support</h6>
        </div>
        </div>
      </section>

<TopBrandsCarousel />
<div style={{textAlign:"center"}}><h1>Hot Deals</h1></div>
<section className="timer_count">
  {/* <div style={{textAlign:"center"}}><h1>Hot Deals</h1></div> */}
  <div className="container con_div">
    <div className="row d-flex align-items-center">
      <div className="col-md-6 text-center text-md-start mb-4 mb-md-0 ">
        <div className="clock_top-content">
          <h4 className="text-white fs-6  mb-2 mb-sm-0">Limited Offers</h4>
          <h3 className="text-white fs-5 mb-3">Upto 50% off*</h3>
        </div>
        <Clock/>
        <motion.button whileTap={{scale:1.2}}
         className="buy_button store_btn"><Link to="">Visit Store</Link></motion.button>
      </div>
      <div className="col-md-6 text-center text-md-end ">
        <img src={timer_img1} className="img-fluid" alt=""/>
      </div>
    </div>
  </div>

</section>
<button onClick={scrollToTop}
 className={`scroll-to-top ${isVisible?"visible":"non-visible"}`}><FaCircleArrowUp /></button>


</>
 )
}

export default Home
