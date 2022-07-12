import React from "react";
import GlobalSvgSelectors from '../../../../assets/icons/global/GlobalSvgSelectors'

const Card = ({item}) => {
  const { day, day_info, icon_id, temp_day, temp_night, info } = item;
  return <div className="cards">
    <div className="day">{day}</div>
    <div className="second_color">{day_info}</div>
    <div><GlobalSvgSelectors id={icon_id} /></div>
    <div>{temp_day}</div>
    <div className="second_color">{temp_night}</div>
    <div className="second_color">{info}</div>
  </div>;
};

export default Card;
