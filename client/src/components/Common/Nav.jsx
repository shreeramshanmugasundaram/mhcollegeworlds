import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [isUser, setIsUser] = useState(
    JSON.parse(localStorage.getItem("profile"))
  );

  useEffect(() => {
    // const token = isUser?.token;
    setIsUser(JSON.parse(localStorage.getItem("profile")));
    // console.log(token);
  }, [location, isUser?.token]);

  const menu = () => {
    const Hamburger = document.getElementById("Hamburger");
    const state = Hamburger.getAttribute("data-is-visible");
    const navbar = document.getElementById("NavigationBar");
    console.log(window.innerWidth);
    if (state === "false") {
      navbar.style.transform = "translate(0)";
      Hamburger.setAttribute("data-is-visible", "true");
    } else {
      Hamburger.setAttribute("data-is-visible", "false");
      navbar.style.transform = "translate(-100%)";
    }
  };

  const handleSlide = () => {
    if (window.innerWidth < 720) {
      const Hamburger = document.getElementById("Hamburger");
      const navbar = document.getElementById("NavigationBar");
      Hamburger.setAttribute("data-is-visible", "false");
      navbar.style.transform = "translate(-100%)";
    }
  };

  const handleLogin = () => {
    handleSlide();
    navigate("/auth");
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    setIsUser(null);
  };

  return (
    <div className="nav__warp">
      <div className="nav" onBlur={handleSlide}>
        <div className="nav__logo" onClick={() => navigate("/")}>
          MH College World
        </div>
        <div className="nav__links" id="NavigationBar">
          <NavLink to="/">Home</NavLink>

          {!isUser ? (
            <>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/price">Pricing</NavLink>
              <button
                className="nav__login"
                type="button"
                onClick={handleLogin}
              >
                Login
              </button>
            </>
          ) : (
            <>
            <NavLink to = "/collect">Your College</NavLink>
              <button
                className="nav__login"
                type="button"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}
        </div>
        <div
          className="nav__hamburger"
          id="Hamburger"
          data-is-visible="false"
          onClick={menu}
          tabIndex="0"
        >
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
};
export default Nav;
