import React from "react";
import { useNavigate } from "react-router-dom";
const Price = () => {
  const navigate = useNavigate();
  const tologin = () => {
    navigate("/auth");
  };
  return (
    <>
      <div className="price__wrap" id="Pricing">
        <div className="price">
          <div className="cat__title">Pricing</div>

          <div className="price__cards">
            {/* <div className="price__card">
              <div className="price__cat">Free</div>
              <div className="price__rs">0/-</div>
              <div className="price__info">
                <ul>
                  <li>
                    <i className="fa-regular fa-circle-check green"></i>Limited
                    to 5 College
                  </li>
                </ul>
              </div>
              <button>Try Now</button>
            </div> */}

            <div className="price__card">
              <div className="price__cat">Premium</div>
              <div className="price__rs">249/-</div>
              <div className="price__info">
                <ul>
                  <li>
                    <i className="fa-regular fa-circle-check green"></i>College Filter based on Branch
                  </li>
                  <li>
                    <i className="fa-regular fa-circle-check green"></i>College Filter based on District
                  </li>
                  <li>
                    <i className="fa-regular fa-circle-check green"></i>College Filter based on Categories
                  </li>
                  <li>
                    <i className="fa-regular fa-circle-check green"></i>Whatsapp Group
                  </li>
                </ul>
              </div>
              <button onClick={tologin}>Try Now</button>
            </div>

            <div className="price__card">
              <div className="price__cat">One to One</div>
              <div className="price__rs">999/-</div>
              <div className="price__info">
                <ul>
                <li>
                    <i className="fa-regular fa-circle-check green"></i>College Filter based on Branch
                  </li>
                  <li>
                    <i className="fa-regular fa-circle-check green"></i>College Filter based on District
                  </li>
                  <li>
                    <i className="fa-regular fa-circle-check green"></i>College Filter based on Categories
                  </li>
                  <li>
                    <i className="fa-regular fa-circle-check green"></i>Whatsapp Group
                  </li>
                  <li>
                    <i className="fa-regular fa-circle-check green"></i>One on One Session with experts
                  </li>
                </ul>
              </div>
              <button>Coming Soon</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;
