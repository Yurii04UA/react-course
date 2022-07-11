import React from "react";
import "./ThisDay.scss";
import sun from "./sun.png";

const ThisDay = () => {
  return (
    <div className="thisDay">
      <div className="box">
        <div className="info">
          <h2>20°</h2>
          <p>Today</p>
        </div>
        <img src={sun} alt="Sun" />
      </div>
      <p>Time: 22:30</p>
      <p>City: Dnipro</p>
    </div>
  );
};

export default ThisDay;
