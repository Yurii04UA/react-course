import React from "react";
import "./ThisDayInfo.scss";
import deg from "./images/deg.png";
import press from "./images/pressure.png";
import rainfall from "./images/rainfall.png";
import wind from "./images/wind.png";

const ThisDayInfo = () => {
  return (
    <div className="thisDayInfo  rain">
      
      <div>
        <div className="block">
          <div className="circle">
            <img src={deg} alt="deg" />
          </div>
          <p>Air temperature</p>
          <span>20° - feels like 17°</span>
        </div>
        <div className="block">
          <div className="circle">
            <img src={press} alt="deg" />
          </div>
          <p>Pressure</p>
          <span>765 mmHg - normal</span>
        </div>
        <div className="block">
          <div className="circle">
            <img src={rainfall} alt="deg" />
          </div>
          <p>Precipitation</p>
          <span>No precipitation</span>
        </div>
        <div className="block">
          <div className="circle">
            <img src={wind} alt="deg" />
          </div>
          <p>Wind</p>
          <span>3 m/s southwest - light breeze</span>
        </div>
      </div>
    </div>
  );
};

export default ThisDayInfo;
