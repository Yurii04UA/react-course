import React from "react";
import "./ThisDayInfo.scss";
import ThisDayItem from './ThisDayItem'


const ThisDayInfo = ({data,loading}) => {
 const {main,wind,weather} =data
  const items = [
    {
      icon_id: "temp",
      name: "Air temperature",
      value: loading? '--': `${main.temp.toFixed(0)}°C - feels like ${main.feels_like.toFixed(0)}°C`,
      // value: `° - feels_like 17°`,
    },
    {
      icon_id: "pressure",
      name: "Pressure",
      value: loading? '--':`${main.pressure} mmHg `,
    },
    {
      icon_id: "precipitation",
      name: "Precipitation",
      value: loading? '--':`${weather[0].description}`,
    },
    {
      icon_id: "wind",
      name: "Wind",
      value: loading? '--':`${wind.speed} m/s  - light breeze`,
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