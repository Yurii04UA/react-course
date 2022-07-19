import React from "react";
import "./ThisDay.scss";
import sun from "./images/sun.png";

const ThisDay = ({data,loading}) => {
  const {name,main,weather} = data
  const time = `${new Date().getHours()}:${new Date().getMinutes()}`

  return (
    <div className="thisDay">
      <div className="box">
        <div className="info">
        {loading? <h2>--</h2>:  <h2>{(main.temp).toFixed(0)}°</h2>}
          <p>Today</p>
        </div>
        {loading? <img src="smt-img" alt='loading' /> : <img src="smt-img" alt={weather[0].description} />}
      </div>
      <p>Time: <span>{time}</span></p>
      <p>City: <span>{name}</span></p>
    </div>
  );
};

export default ThisDay;
