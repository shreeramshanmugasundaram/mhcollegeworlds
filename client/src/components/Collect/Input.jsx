import React from "react";

import "./input.css";

const Input = ({ handleChange, name, label, options }) => {
  return (
    <>
      <div className="collect__select">
        {name === "exam" && (
          <div className="input__percentile">
            <label>Enter your Percentile</label>
            <input
            required
              name="percentile"
              type="number"
              onChange={handleChange}
              min="0"
              max="100"
              step="0.00000001"
            />
          </div>
        )}
        {name === "dist1" && (
          <div className="collect__districtHeading">
            Intrested District to Study in?
          </div>
        )}
        <label>{label}</label>
        <select name={name} onChange={handleChange}>
          {options.map((option) => {
            return (
              <>
                <option value={option.value} key={option.value}>
                  {option.label}
                </option>
              </>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default Input;
