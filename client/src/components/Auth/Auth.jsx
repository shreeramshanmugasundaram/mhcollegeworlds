import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import { signin, signup } from "../../actions/auth";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  const handleVisible = () => {
    setShowPassword((prevshowpassowrd) => !prevshowpassowrd);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signin(formData, navigate));
    } else {
      dispatch(signup(formData, navigate));
    }
    console.log("handleSubmit");
  };
  return (
    <>
      <div className="premium__wrap">
        <div className="premium">
          <div className="premium__cir"></div>
          <div className="title">
            {isSignup ? (
              <>
                <h2>
                  Hey,
                  <br />
                  Login Now.
                </h2>
              </>
            ) : (
              <>
                <h2>
                  Hey,
                  <br />
                  Create New Account.
                </h2>
              </>
            )}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form__group">
              {!isSignup && (
                <input
                required
                  className="premium__input"
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                />
              )}
              <input
                required
                className="premium__input"
                type="text"
                inputMode="numeric"
                placeholder="Phone Number"
                pattern="[0-9]{10}"
                name="phone"
                maxLength="10"
                onChange={handleChange}
              />
              <input
                required
                className="premium__input"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              {!isSignup && (
                <>
                  <input
                  required
                    className="premium__input"
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    name="cpassword"
                    onChange={handleChange}
                  />
                  {/* {ismatch && (
                    <p className="ismatch">Password does not match</p>
                  )} */}
                </>
              )}

              <p>
                &nbsp;
                <input
                  className="checkbox__password"
                  type="checkbox"
                  onChange={handleVisible}
                />
                &nbsp; Show Password
              </p>
            </div>
            <button className="nav__login addon__input" type="submit">
              {isSignup ? "Login In" : "Create"}
            </button>
          </form>
          {isSignup ? (
            <p onClick={() => setIsSignup((prestate) => !prestate)}>
              If you are new / <span>Create Now </span>
            </p>
          ) : (
            <p onClick={() => setIsSignup((prestate) => !prestate)}>
              Already have an account / <span>Login Now </span>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Auth;
