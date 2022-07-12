import React from "react";
import "./Popup.scss";
import ThisDayItem from "../../Pages/Home/components/ThisDayInfo/ThisDayItem";
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelectors";

const Popup = () => {
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
    },
  ];
  return (
   <>
   <div className="blur"></div>
    <div className="popup">
      <div className="thisDayInfo sunny">
        <div className="popup-wrapper">
          {items.map((item) => (
            <ThisDayItem key={item.icon_id} item={item} />
          ))}
        </div>
      </div>
      <div className="close">
            <GlobalSvgSelector id='close' />
      </div>
    </div>
   </>
  );
};

export default Popup;
