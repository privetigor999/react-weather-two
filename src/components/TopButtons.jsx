import React from "react";

const TopButtons = () => {
  const cities = [
    {
      id: 1,
      title: "Moscow",
    },
    {
      id: 2,
      title: "Berlin",
    },
    {
      id: 3,
      title: "Amsterdam",
    },
    {
      id: 4,
      title: "Madrid",
    },
    {
      id: 5,
      title: "Oslo",
    },
  ];

  return (
    <div className="topButtons">
      {cities.map((city) => (
        <button key={city.id}>{city.title}</button>
      ))}
    </div>
  );
};

export default TopButtons;
