import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer__wrap">
      <div className="footer">
        <div className="social__media">
          <a href="facebook.com">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="instagram.com">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="twitter.com">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="linkedin.com">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>

        <div className="contact">
          <div className="contact__phone">
            <div className="college__phone__title">Phone No.</div>
            <p>+91 9860821154</p>
            <p>+91 7498508551</p>
          </div>
          <div className="contact__email">
            <h3>Email</h3>
            <p>mhcollegeworld@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
