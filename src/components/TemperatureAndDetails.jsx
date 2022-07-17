import React from "react";
import { UilTemperatureHalf, UilTear, UilWind } from "@iconscout/react-unicons";

const TemperatureAndDetails = () => {
  return (
    <div className="weatherDetails">
      <img src="http://openweathermap.org/img/wn/01d@2x.png" />
      <div className="temperatureAndDetails">
        <h7>cloudy</h7>
        <p>10°</p>
      </div>
      <div className="humidityAndWind">
        <div className="temperature">
          <UilTemperatureHalf size={16} />
          <p>Real fell:</p>
          <span>20°</span>
        </div>
        <div className="humidity">
          <UilTear size={16} />
          <p>Humidity:</p>
          <span>100%</span>
        </div>
        <div className="wind">
          <UilWind size={16} />
          <p>Wind:</p>
          <span>10 km/h</span>
        </div>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
