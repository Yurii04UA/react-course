import React from "react";
import "./ThisDayInfo.scss";
import ThisDayItem from './ThisDayItem'


const ThisDayInfo = () => {
  const items = [
    {
      icon_id: "temp",
      name: "Air temperature",
      value: "20° - feels like 17°",
    },
    {
      icon_id: "pressure",
      name: "Pressure",
      value: "765 mmHg - normal",
    },
    {
      icon_id: "precipitation",
      name: "Precipitation",
      value: "No precipitation",
    },
    {
      icon_id: "wind",
      name: "Wind",
      value: "3 m/s southwest - light breeze",
    }
  ];
  return (
    <div className="thisDayInfo">
      <div>
        {items.map(item => <ThisDayItem  key={item.icon_id} item={item}/>)}
      </div>
    </div>
  );
};

export default ThisDayInfo;

{/* <div className="block">
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
        </div> */}