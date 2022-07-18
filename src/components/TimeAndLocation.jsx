import React from "react";
import { formatToLocalTime } from "./services/service";
const TimeAndLocation = ({ weather: { dt, timezone, name, country } }) => {
  return (
    <div className="timeAndLocation">
      <p>{formatToLocalTime(dt, timezone)}</p>
      <h1>{`${name}, ${country}`}</h1>
    </div>
  );
};

export default TimeAndLocation;
