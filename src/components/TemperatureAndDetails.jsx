import React from "react";
import {
  UilTemperatureHalf,
  UilTear,
  UilTemperature,
  UilTemperatureEmpty,
  UilWindsock,
} from "@iconscout/react-unicons";
import { iconUrl } from "./services/service";

const TemperatureAndDetails = ({
  weather: {
    icon,
    humidity,
    temp,
    feels_like,
    details,
    temp_min,
    temp_max,
    speed,
  },
  units,
}) => {
  const toggleUnits = () => {
    return units == "metric" ? "C" : "F";
  };
  return (
    <>
      <div className="weatherDetails">
        <img src={iconUrl(icon)} className="weatherImg" />
        <div className="temperatureAndDetails">
          <h1>{details}</h1>
          <p>{Math.round(temp) + "° " + toggleUnits()}</p>
        </div>
        <div className="tempMinAndMax">
          <div>
            <UilTemperature className="topAndDownTempIcons" />
            <p> max: {Math.round(temp_max) + "° " + toggleUnits()}</p>
          </div>
          <div>
            <UilTemperatureEmpty className="topAndDownTempIcons" />
            <p> min: {Math.round(temp_min) + "° " + toggleUnits()}</p>
          </div>
        </div>
      </div>
      <div className="humidityAndWind">
        <div className="temperature">
          <UilTemperatureHalf className="rightSidesImgs" />
          <p>Fells like:</p>
          <span>{Math.round(feels_like) + "° " + toggleUnits()}</span>
        </div>
        <div className="humidity">
          <UilTear className="rightSidesImgs" />
          <p>Humidity:</p>
          <span>{humidity + "%"}</span>
        </div>
        <div className="wind">
          <UilWindsock className="rightSidesImgs" />
          <p>Wind:</p>
          <span>{speed.toFixed(1)} km/h</span>
        </div>
      </div>
    </>
  );
};

export default TemperatureAndDetails;
