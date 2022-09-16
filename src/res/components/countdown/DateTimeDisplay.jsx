import React from "react";
import "./css/countdown.css";

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className="countdown-value">
      <p id="countdown-num">{value}</p>
      <p id="countdown-type">
        {type}
        {value === 1 ? null : "s"}
      </p>
    </div>
  );
};

export default DateTimeDisplay;
