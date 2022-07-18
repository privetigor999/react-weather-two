import React from "react";
import { UilSearch, UilMapMarker } from "@iconscout/react-unicons";

const Inputs = ({ setQuery, units, setUnits }) => {
  const [value, setValue] = React.useState("");
  const handleSearchClick = () => {
    if (value != false) {
      setQuery({ q: value });
      setValue("");
    }
  };
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        let lat = pos.coords.latitude;
        let lon = pos.coords.longitude;

        setQuery({ lat, lon });
      });
    }
  };

  const handleUnitsChange = (event) => {
    const selectedUnit = event.target.name;
    if (selectedUnit !== units) {
      setUnits(selectedUnit);
    }
  };
  return (
    <div className="inputs">
      <div className="leftSide">
        <input
          type="text"
          value={value}
          placeholder="search for city..."
          onChange={(event) => setValue(event.target.value)}
        />
        <UilSearch className="image" onClick={handleSearchClick} />
        <UilMapMarker className="image" onClick={handleLocationClick} />
      </div>
      <div className="rightSide">
        <button name="metric" onClick={handleUnitsChange}>
          °C
        </button>
        <p>|</p>
        <button name="imperial" onClick={handleUnitsChange}>
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
