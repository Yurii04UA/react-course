import React from "react";
import GlobalSvgSelectors from '../../../../assets/icons/global/GlobalSvgSelectors'

const Card = ({item}) => {
  const {icon_id, temp, weather, info } = item;
  return <div className="cards">
    <div className="day">--</div>
    <div className="second_color">--</div>
    <div><img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt={weather[0].description} /></div>
    <div>{temp.day.toFixed(0)}°C</div>
    <div className="second_color">{temp.night.toFixed(0)}°C</div>
    <div className="second_color">{weather[0].description}</div>
  </div>;
};

export default Card;
