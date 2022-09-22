import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "./profile.css";

const Profile = () => {
  const data = useSelector((state) => state.colleges);
  const location = useLocation()
  const userdata = JSON.parse(localStorage.getItem("profile"))
  console.log(location)

  return (
    <>
      <div className="college__profile">
        <div className="college__profile__text">
          <h4>{userdata.result.name.toUpperCase()}</h4>
          <div>
            <div>Percentile : {location.state?.percentile}</div>
            <div>Branch : {location.state?.branch}</div>
          </div>
        </div>
      </div>
            <div>
              <div className="college__card">
                <div className="college__card__upper">
                  <div className="college__count">Ranks</div>
                  <div className="college__dtecode">DTE</div>
                  <div className="college__name">Colleges</div>
                  <div className="college__cutoff">Percentile</div>
                  {/* <div classname="college__dropdownarro">more</div> */}
                </div>
              </div>
  
      {data.map((singlecollege,index) => {
        return (
          <>
              <div className="college__card">
                <div className="college__card__upper">
                  <div className="college__count">{index+1}</div>
                  <div className="college__dtecode">{singlecollege.dte}</div>
                  <div className="college__name">
                    {singlecollege.name}
                  </div>
                  <div className="college__cutoff">{singlecollege.cutoff}</div>
                  {/* <div classname="college__dropdownarrow"></div> */}
                </div>
                <div className="college__card__lower">
                  <div className="college__district">District : {singlecollege.dist}</div>
                  <a className="college__seatMatrix college__btn"  target = "blank" href ={`http://localhost:5000/pdf/${singlecollege.dte}`}>
                    Cutoff
                  </a>
                  <a className="college__detail college__btn" target = "blank" href={`http://www.dtemaharashtra.gov.in/StaticPages/frmInstituteSummary.aspx?InstituteCode=${singlecollege.dte}`}>
                    College Details
                  </a>
                  <a className="college__webiste college__btn" target = "blank" href={`https://${singlecollege.web_address}`}>
                    College Website
                  </a>
                </div>
              </div>
          </>
        );
      })}
      </div>
    </>
  );
};
export default Profile;
