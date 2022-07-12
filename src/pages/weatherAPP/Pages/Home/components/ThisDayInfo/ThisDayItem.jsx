import React from "react";
import IndicatorSvgSelector from "../../../../assets/icons/indicatorSvgSelector/IndicatorSvgSelector";
const ThisDayItem = ({item}) => {
   const {icon_id,name,value} = item
  return (
    <div className="block">
      <div className="circle">
      <IndicatorSvgSelector  id={icon_id}/>
      </div>
      <p>{name}</p>
      <span>{value}</span>
    </div>
  );
};

export default ThisDayItem;
