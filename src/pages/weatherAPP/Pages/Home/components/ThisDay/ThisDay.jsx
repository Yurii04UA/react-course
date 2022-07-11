import React from "react";
import "./ThisDay.scss";
import sun from "./images/sun.png";

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
      <p>Time: <span>22:30</span></p>
      <p>City: <span>Dnipro</span></p>
    </div>
  );
};

export default ThisDay;
