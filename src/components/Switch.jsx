import React from "react";

const Switch = ({ setIsChecked, isChecked }) => {
  return (
    <div className="switchWrapper">
      <p>switch to change theme:</p>
      <div className="switch">
        <input type="checkbox" className="checkbox" id="checkbox" />
        <label
          for="checkbox"
          className="checkboxLabel"
          onClick={() => setIsChecked(!isChecked)}
        ></label>
      </div>
    </div>
  );
};

export default Switch;
