import React from "react";

const TimeAndLocation = ({ weather: { name, country } }) => {
  return (
    <div className="timeAndLocation">
      <p>Time and location</p>
      <h1>{`${name}, ${country}`}</h1>
    </div>
  );
};

export default TimeAndLocation;
