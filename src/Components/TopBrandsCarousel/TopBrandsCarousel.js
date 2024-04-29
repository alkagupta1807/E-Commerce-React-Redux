import React from 'react';

import "./TopBrandsCarousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TopBrandsCarousel = ({ brands }) => {
  
  
  const responsive = {
    superLargeDesktop: {
     
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
    
  

  };
 

  return (
  //  <div className="container-fluid">
  
   <div className="carousel_1 carousel__container_1 ">
   <div className="top_brands_title"><h1 data-aos="zoom-out">Top Brands</h1></div> 
    <Carousel responsive={responsive}>
   
    <div className=" col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  carousel__item_1 "   >
    <div className="box_1 " >
    <img src="images/bibabrand.png"  className="responsive-image" alt="img"/>
      
    </div>
    </div>
    
    <div className=" col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 carousel__item_1 " >
    <div className="box_1">
    <img src="images/indyabrand.png" className="responsive-image"  alt="img"/>
     
    </div>
    </div>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 carousel__item_1 " >
    <div className="box_1">
    <img src="images/rangritibrand.png" className="responsive-image"  alt="img"/>
     
    </div>
    </div>
    {/* <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 carousel__item_1">
    {/* <div className="box_1"> */}
    {/* <img src="images/aureliabrand.png"  className="responsive-image" alt="img"/> */}
     
    {/* </div> */}
    {/* </div> */} 
    <div className=" col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 carousel__item_1 ">
    <div className="box_1">
    <img src="images/fabindiabrand.png" className="responsive-image " alt="img"/>
      
    </div>
    </div>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2  carousel__item_1 " >
    <div className="box_1">
    <img src="images/libasbrand.png" className="responsive-image" alt="img"/>
      
    </div>
    </div>


  </Carousel>
   </div>
  //  </div>
  );
};

export default TopBrandsCarousel;
