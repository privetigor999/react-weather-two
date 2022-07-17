import React from "react";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import "./App.scss";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <TopButtons />
        <Inputs />
        <TimeAndLocation />
      </div>
    </div>
  );
}

export default App;
