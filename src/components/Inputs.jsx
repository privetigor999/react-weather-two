import React from "react";
import { UilSearch, UilMapMarker } from "@iconscout/react-unicons";

const Inputs = () => {
  return (
    <div className="inputs">
      <div className="leftSide">
        <input type="text" placeholder="search for city..." />
        <UilSearch className="image" />
        <UilMapMarker className="image" />
      </div>
      <div className="rightSide">
        <button>°C</button>
        <p>|</p>
        <button>°F</button>
      </div>
    </div>
  );
};

export default Inputs;
