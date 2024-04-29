import React from "react";
import "./Footer.css";
import { PiHandbagSimpleFill } from "react-icons/pi";



const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-box">
                {/* <img src="img/logo.png" alt="" /> */}
             <div style={{display:"flex"}}><PiHandbagSimpleFill/><h6>
              <span style={{color:"magenta"}}>Fashion</span> Freaks</h6></div>   
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                  consequatur inventore mollitia sed nobis dolor sunt tempore
                  accusamus nisi voluptas.
                </p>
                <h3>We Accept</h3>
                <div className="card-area">
                <i className="fa-brands fa-cc-visa"></i>
                <i className="fa-solid fa-credit-card"></i>
                <i className="fa-brands fa-cc-mastercard"></i>
                <i className="fa-brands fa-cc-paypal"></i>

                </div>
              </div>
            </div>
            <div className=" col-lg-3 col-sm-6">
              <div className="single-box">
                <h2>Store and Sites</h2>
                <ul>
                  <li><a href="#">Cart</a></li>
                  <li><a href="#">Woman Fashion</a></li>
                  <li><a href="#">Accessories</a></li>
                  <li><a href="#">My Order</a></li>
                  <li><a href="#">Wishlist</a></li>
                  <li><a href="#">Order Tracking</a></li>

                </ul>
              </div>
            </div>
            <div className=" col-lg-3 col-sm-6">
              <div className="single-box">
                <h2>Policies</h2>
                <ul>
                  <li><a href="#">Terms of Use</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Delivery Policy</a></li>
                  <li><a href="#">Exchanges</a></li>
                  <li><a href="#">Returns</a></li>
                  <li><a href="#">First Citizen Club</a></li>

                </ul>
              </div>
            </div>
            <div className=" col-lg-3 col-sm-6">
              <div className="single-box">
                <h2>Newsletter</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, voluptatum?</p>
                <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Enter Your Email.." 
         aria-label="Recipient's username" aria-describedby="basic-addon2"/>
          <span className="input-group-text" id="basic-addon2">
            <i className="fa-solid fa-arrow-right-long"></i></span>
          </div>
          <h2>Follow Us On </h2>
          <p className="socials">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-square-instagram"></i>
          <i className="fa-brands fa-pinterest"></i>
          <i className="fa-brands fa-twitter"></i>
          </p>
              </div>
            </div>

            
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
