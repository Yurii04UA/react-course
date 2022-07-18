import React from "react";
import "./ThisDay.scss";
import sun from "./images/sun.png";

const ThisDay = () => {
  const time = `${new Date().getHours()}:${new Date().getMinutes()}`
  return (
    <div className="thisDay">
      <div className="box">
        <div className="info">
          <h2>20°</h2>
          <p>Today</p>
        </div>
        <img src={sun} alt="Sun" />
      </div>
      <p>Time: <span>{time}</span></p>
      <p>City: <span>Dnipro</span></p>
    </div>
  );
};

export default ThisDay;
