import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import district from "./district";
import { getcolleges } from "../../actions/college";

const Collect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(()=>{
    const localdata = JSON.parse(localStorage.getItem("profile"))
    if (localdata){
      if (!localdata.result.isPaid){
        navigate("/payment")
      }
    }
  },[navigate])
  const collectInputs = [
    {
      name: "exam",
      label: "Choose Your Exam",
      options: [
        { value: "jee", label: "JEE" },
        { value: "cet", label: "CET" },
      ],
    },

    {
      name: "category",
      label: "Choose your Category",
      options: [
        { value: "open", label: "Open" },
        { value: "obc", label: "OBC" },
        { value: "sc", label: "SC" },
        { value: "st", label: "ST" },
      ],
    },
    {
      name: "branch",
      label: "Select your Branch",
      options: [
        { value: "civil", label: "Civil" },
        { value: "comp", label: "Computer/IT" },
        { value: "entc", label: "Electronic & Telecommunication" },
        { value: "mech", label: "Mechanical" },
        { value: "ele", label: "Electrical" },
      ],
    },
    {
      name: "district",
      label: "Completed Your 12th in (District)",
      options: district,
    },
    {
      name: "gender",
      label: "Select your Gender",
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
      ],
    },
    {
      name: "dist1",
      label: "Choose your first district ",
      options: district,
    },
    {
      name: "dist2",
      label: "Choose your Second district ",
      options: district,
    },
    {
      name: "dist3",
      label: "Choose your Third district ",
      options: district,
    },
  ];
  const startformdata = {
    percentile: "",
    exam: "jee",
    category: "open",
    branch: "civil",
    district: "ahmednagar",
    gender: "male",
    dist1: "Ahmednagar",
    dist2: "Ahmednagar",
    dist3: "Ahmednagar",
  };
  const [formData, setformData] = useState(startformdata);
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getcolleges(formData, navigate));
    console.log("handle Submit from Collector");
  };

  return (
    <>
      <div className="premium__wrap">
        <div className="premium addon__premium">
          <div className="title">
            {/* <br /> */}
            <h3>Personal Information</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form__group ">
              {collectInputs.map((Singleinput) => {
                return (
                  <Input
                    key={Singleinput.name}
                    name={Singleinput.name}
                    label={Singleinput.label}
                    handleChange={handleChange}
                    options={Singleinput.options}
                  />
                );
              })}
            </div>
            <button className="nav__login addon__input" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Collect;
