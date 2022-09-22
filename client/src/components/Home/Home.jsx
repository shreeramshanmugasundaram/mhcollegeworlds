import React from "react";
import "./Home.css";
import educationimg from "../../Images/education.svg";
import engineeringimg from "../../Images/engineering.svg";
import medicalimg from "../../Images/medical.svg";
import { useNavigate } from "react-router-dom";
import Footer from "../Common/Footer";
import Price from "./Price";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="banner__wrap">
        <div className="cir1"></div>
        <div className="cir2"></div>
        <div className="banner">
          <div className="banner__img">
            <img src={educationimg} alt="Mhcollegeworldimg" />
          </div>
          <div className="banner__text">
            <h1>
              Get Your <span>Dream College</span>
            </h1>
            <p>Get Ready-made list of colleges for your MH CET Opiton Form.</p>
            <button
              type="button"
              onClick={() => {
                navigate("/auth");
              }}
            >
              Try Now
            </button>
          </div>
        </div>
      </div>
      {/* <!-- Catogeries --> */}
      <div className="cat__warp" id="Catogeries">
        <div className="deco__box"></div>
        <div className="cat">
          <div className="cat__title">
            <div></div>
            <span>Catogeries</span>
            <div></div>
          </div>
          <div className="cat__container">
            <div className="cat__card">
              <div className="cat__img">
                <img src={engineeringimg} alt="Engineering" />
              </div>
              <div className="cat__text">
                <h2>Engineering</h2>
                <p>
                  Students who want to perceive Engineering as their carrer and
                  have given MH-CET
                </p>
                <button
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Click Here
                </button>
              </div>
            </div>
            <div className="cat__card">
              <div className="cat__img">
                <img src={medicalimg} alt="Medical" />
              </div>
              <div className="cat__text">
                <h2>Medical</h2>
                <p>
                  Students who want to perceive Medical as their carrer and have
                  given MH-CET
                </p>
                <button>Coming Soon</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Pricing --> */}
      <Price />
      <Footer />
      <a href="https://storyset.com/education" className="illustration">Education illustrations by Storyset</a>
    </>
  );
};

export default Home;
