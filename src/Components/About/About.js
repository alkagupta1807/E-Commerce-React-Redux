import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const About = () => {
  const responsive = {
    superLargeDesktop: {
      
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 540 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 540, min: 0 },
      items: 1
    },
    mobilePortrait: {
      breakpoint: { max: 575, min: 320 },
      items: 1
    },
    smallMobile: {
      breakpoint: { max: 319, min: 0 },
      items: 1
    }
  };
  
  
  

  return (
    <>
      <section id="about-head" className="section-p1 section-m1">
        
        <img src="images/about_us.png" alt="" />
        <div>
          <h2>Who We Are?</h2>
          <p className="who_we_are">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
            facere molestiae dolorum quos ipsam accusamus maxime sequi sint
            dignissimos quae laudantium tempora tempore natus quod architecto
            rerum tenetur quisquam quia magnam, illum aliquam incidunt veniam
            aliquid! Cumque perspiciatis numquam ratione repudiandae repellendus
            eius. Ratione et porro quis voluptate veniam assumenda.
          </p>
          <abbr title="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
            odit? Adipisci delectus corrupti accusantium natus.
          </abbr>
          <br></br>
          <br></br>
          {/* <marquee className="marquee_style">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            qui dolorum, vel quia fuga quidem!
          </marquee> */}
        </div>
      </section>
      <section id="about-app" className="section-p1">
        <h1>
          Download Our <Link to="/">App</Link>
        </h1>
        <div className="video">
          <video autoPlay muted loop src="images/video_about.mp4"></video>
        </div>
      </section>
     

      <section id="feature_all" className="section-p1">
        <div className="feature_title"><h1>Our Specialities</h1></div>
        <div id="feature">
        <div className="fe-box">
          <img src="images/free_shipping.png" alt="" />
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
      <section id="testimonials_section" className="section-p1">
     <div className="testimonials_container"> <h1>Testimonials</h1></div>
    
      <div className="carousel_about">
        
    <Carousel responsive={responsive}>
   <div className="card box_about" style={{width:"16rem",height:"28rem"}}>
  <img src="images/pic-1.png" className="card-img-top img-fluid img_about" alt="img"/>
  <div className="card-body" style={{textAlign:"center"}}>
    <h5 className="card-title">Akash Awasthi</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div>
    <span style={{color:"coral"}}><FaStar /></span>
    <span style={{color:"coral"}}><FaStar /></span>
    <span style={{color:"coral"}}><FaStar /></span>
   <span style={{color:"coral"}}><FaStar /></span>
    <span style={{color:"coral"}}><FaStarHalf /></span>
  </div>
 
</div>
    </div>
    <div className="card box_about" style={{width:"16rem",height:"28rem"}} >
    <img src="images/pic-2.png" className="card-img-top img-fluid  img_about" alt="img"/>
  <div className="card-body">
    <h5 className="card-title">Shubha Dutta</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div>
    <span style={{color:"coral"}}><FaStar /></span>
    <span style={{color:"coral"}}><FaStar /></span>
    <span style={{color:"coral"}}><FaStar /></span>
   <span style={{color:"coral"}}><FaStar /></span>
    <span style={{color:"coral"}}><FaStarHalf /></span>
  </div>
 
</div>
   
    </div>
    <div className=" card box_about " style={{width:"16rem",height:"28rem"}} >
   
      <img src="images/pic-3.png" className="card-img-top img-fluid img_about" alt="img"/>
      <div className="card-body">
    <h5 className="card-title">Saurabh</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div>
    <span style={{color:"coral"}}><FaStar /></span>
    <span style={{color:"coral"}}><FaStar /></span>
    <span style={{color:"coral"}}><FaStar /></span>
   <span style={{color:"coral"}}><FaStar /></span>
    <span style={{color:"coral"}}><FaStarHalf /></span>
  </div>
 
</div> 
    </div>
    <div className=" card box_about" style={{width:"16rem",height:"28rem"}}>
    
      <img src="images/pic-4.png" className="card-img-top img-fluid img_about" alt="img"/>
      <div className="card-body">
    <h5 className="card-title">Nikita Agarwal</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div>
    <span style={{color:"coral"}}><FaStar /></span>
    <span style={{color:"coral"}}><FaStar /></span>
    <span style={{color:"coral"}}><FaStar /></span>
   <span style={{color:"coral"}}><FaStar /></span>
    <span style={{color:"coral"}}><FaStarHalf /></span>
  </div>
 
</div> 
    </div>
    <div className=" card box_about" style={{width:"16rem",height:"28rem"}}>
  
      <img src="images/pic-5.png" className="card-img-top img-fluid img_about" alt="img"/>
      <div className="card-body">
    <h5 className="card-title">Karanvir Kataria</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div>
    <span style={{color:"coral"}}><FaStar /></span>
    <span style={{color:"coral"}}><FaStar /></span>
    <span style={{color:"coral"}}><FaStar /></span>
   <span style={{color:"coral"}}><FaStar /></span>
    <span style={{color:"coral"}}><FaStarHalf /></span>
  </div>
 
</div> 
    </div>
    <div className=" card box_about" style={{width:"16rem",height:"28rem"}}>
    
      <img src="images/pic-6.png" className="card-img-top img-fluid img_about" alt="img"/>
      <div className="card-body">
    <h5 className="card-title">Rhea Sinha</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div>
    <span style={{color:"coral"}}><FaStar /></span>
    <span style={{color:"coral"}}><FaStar /></span>
    <span style={{color:"coral"}}><FaStar /></span>
   <span style={{color:"coral"}}><FaStar /></span>
    <span style={{color:"coral"}}><FaStarHalf /></span>
  </div>
 
</div> 
    </div>
  </Carousel>
   </div>
   
   </section>

   <div className="accordion_container_1">
    <h3>Frequently Asked Questions</h3>
      <div className="accordion accordion_container" id="accordionExample">
  <div className="accordion-item accordion_item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button accordion_button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show accordion_button" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item accordion_item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed accordion_button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item accordion_item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed accordion_button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
</div>
    </>
  );
};

export default About;
