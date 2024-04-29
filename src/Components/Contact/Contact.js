import React, { useState } from "react";
import { FaMobileAlt } from "react-icons/fa";
import { FaRegEnvelopeOpen } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <section className="contact-section">
        <div className="contact-bg">
          <h3>Get in Touch With Us</h3>
          <h2>contact us</h2>
          <div className="line">
            <div></div>
            <div></div>
            <div></div>
          </div>
          {/* <p className="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
            culpa? Repellendus illo laborum quasi non numquam voluptatem quas
            itaque quibusdam dolorum fuga. Eius, esse aliquam.
          </p> */}
        </div>
        <div className="contact-body">
          <div className="contact-info">
            <div>
              <span>
                <FaMobileAlt style={{fontSize:"48px",paddingBottom:"14.4px",color:"pink"}} />
              </span>
              <span>Phone No.</span>
              <span className="text">1-2393-23928-2</span>
            </div>
            <div>
              <span>
                <FaRegEnvelope style={{fontSize:"48px",paddingBottom:"14.4px",color:"pink"}}/>
              </span>
              <span>E-mail</span>
              <span className="text"> mail@company.com</span>
            </div>
            <div>
              <span>
                <FaMapMarkerAlt style={{fontSize:"48px",paddingBottom:"14.4px",color:"pink"}} />
              </span>
              <span>Address</span>
              <span className="text"> DA-161 Sector 1 Saltlake,Kolkata</span>
            </div>
            <div>
              <span>
                <FaClock style={{fontSize:"48px",paddingBottom:"14.4px",color:"pink"}}/>
              </span>
              <span>Opening Hours</span>
              <span className="text"> All Days(24/7)</span>
            </div>
          </div>
          <div className="contact-form_1">
            <form>
              <div>
                <input
                  type="text"
                  className="form-control_1"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="form-control_1"
                  placeholder="Last Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  className="form-control_1"
                  placeholder="E-mail"
                />
                <input
                  type="text"
                  className="form-control_1"
                  placeholder="Phone"
                />
              </div>
              <textarea
                rows="5"
                placeholder="Message"
                className="form-control_1"
              ></textarea>
              <input type="submit" className="send-btn" value="send message" />
            </form>
            <div>
              <img src="images/contact_support.jpg" alt="picture" />
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.829617430485!2d88.40017407507811!3d22.585474979482488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275df9f47d69b%3A0xbd00f40d984f6c1d!2sD-A-161%2C%20DA%20Block%2C%20Sector%201%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal%20700064!5e0!3m2!1sen!2sin!4v1710135669656!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{border:"0;"}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
