import React from "react";
import { UilTemperatureHalf, UilTear, UilWind } from "@iconscout/react-unicons";
import { iconUrl } from "./services/service";

const TemperatureAndDetails = ({
  weather: { icon, humidity, temp, feels_like, details },
  units,
}) => {
  const toggleUnits = () => {
    return units == "metric" ? "C" : "F";
  };
  return (
    <div className="weatherDetails">
      <img src={iconUrl(icon)} className="weatherImg" />
      <div className="temperatureAndDetails">
        <h7>{details}</h7>
        <p>{Math.round(temp) + "° " + toggleUnits()}</p>
      </div>
      <div className="humidityAndWind">
        <div className="temperature">
          <UilTemperatureHalf className="rightSidesImgs" />
          <p>Real fell:</p>
          <span>{Math.round(feels_like) + "° " + toggleUnits()}</span>
        </div>
        <div className="humidity">
          <UilTear className="rightSidesImgs" />
          <p>Humidity:</p>
          <span>{humidity + "%"}</span>
        </div>
        <div className="wind">
          <UilWind className="rightSidesImgs" />
          <p>Wind:</p>
          <span>10 km/h</span>
        </div>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
