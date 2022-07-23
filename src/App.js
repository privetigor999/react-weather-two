import React, { useState, useEffect } from "react";
import "./App.scss";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import getFormattedWeatherData from "./components/services/service";
import Footer from "./components/Footer";
import Switch from "./components/Switch";

function App() {
  const [query, setQuery] = useState({ q: "moscow" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);
  const [isChecked, setIsChecked] = React.useState(false);
  console.log(isChecked);
  return (
    <div className={isChecked ? "App1" : "App"}>
      <div className="wrapper">
        <Switch isChecked={isChecked} setIsChecked={setIsChecked} />
        <TopButtons setQuery={setQuery} />

        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

        {weather && (
          <>
            <TimeAndLocation weather={weather} />
            <TemperatureAndDetails weather={weather} units={units} />
          </>
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
