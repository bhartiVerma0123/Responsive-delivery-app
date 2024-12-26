import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="foot_content d-flex justify-content-between align-items-center">
          <div className="foot_data col-lg-3 col-sm-6">
            <h4>Location</h4>
            <p>5505 Waterford District</p>
            <p>Dr, Miami, FL 33126</p>
            <p>United States</p>
          </div>
          <div className="foot_data col-lg-3 col-sm-6">
            <h4>Working Hours</h4>
            <p>Mon-Fri: 9:00AM - 10:00PM</p>
            <p>Saturday: 10:00AM - 8:30PM</p>
            <p>Sunday: 12:00PM - 5:00PM</p>
          </div>
          <div className="foot_data col-lg-3 col-sm-6">
            <h4>Order Now</h4>
            <p>Quaerat neque purus ipsum</p>
            <p>United States</p>
            <button className="btn-calling">999-888-7777</button>
          </div>
          <div className="foot_data col-lg-3 col-sm-6">
            <h4>Follow Us</h4>
            <p>Quaerat neque purus ipsum</p>
            <div className="follow_icons">
              <IoLogoInstagram />
              <IoLogoFacebook />
              <IoLogoTwitter />
              <IoLogoLinkedin />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright col-lg-12">
          <p>
            © 2024 <span>Web developer team</span>. All Rights Reserved
          </p>
        </div>
    </footer>
  );
};
