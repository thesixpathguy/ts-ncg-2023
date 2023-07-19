import React, { useState } from "react";
import classes from "./Input.module.css";

const InputComponent = (props) => {
  const [country, setCountry] = useState("");
  const [indicator, setIndicator] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleIndicatorChange = (e) => {
    setIndicator(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalInput = {
      country: country,
      indicator: indicator,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
    };
    setCountry("");
    setIndicator("");
    setStartDate("");
    setEndDate("");
    props.onSubmit(finalInput);
  };

  return (
    <form className={classes["input-form"]} onSubmit={handleSubmit}>
      <div className={classes["input-group"]}>
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={handleCountryChange}
          className={classes["input-field"]}
        />
      </div>
      <div className={classes["input-group"]}>
        <label htmlFor="input2">Input 2:</label>
        <input
          type="text"
          id="indicator"
          value={indicator}
          onChange={handleIndicatorChange}
          className={classes["input-field"]}
        />
      </div>
      <div className={classes["input-group"]}>
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={handleStartDateChange}
          className={classes["input-field"]}
        />
      </div>
      <div className={classes["input-group"]}>
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={handleEndDateChange}
          className={classes["input-field"]}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputComponent;
