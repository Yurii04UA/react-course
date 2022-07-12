import React from "react";
import Card from "./Card";
import "./Days.scss";
import Tabs from "./Tabs";

const Days = () => {
  const days = [
    {
      day: "Today",
      day_info: "Jule 12",
      icon_id: "sun",
      temp_day: "+18°C",
      temp_night: "+15°C",
      info: "cloudy",
    },
    {
      day: "Tomorrow",
      day_info: "Jule 13",
      icon_id: "small_rain_sun",
      temp_day: "+18°C",
      temp_night: "+15°C",
      info: "light rain and sunshine",
    },
    {
      day: "Wednesday",
      day_info: "Jule 13",
      icon_id: "small_rain",
      temp_day: "+18°C",
      temp_night: "+15°C",
      info: "small rain",
    },
    {
      day: "Thursday",
      day_info: "Jule 14",
      icon_id: "sun",
      temp_day: "+18°C",
      temp_night: "+15°C",
      info: "cloudy",
    },
    {
      day: "Friday",
      day_info: "Jule 15",
      icon_id: "sun",
      temp_day: "+18°C",
      temp_night: "+15°C",
      info: "cloudy",
    },
    {
      day: "Sunday",
      day_info: "Jule 16",
      icon_id: "sun",
      temp_day: "+18°C",
      temp_night: "+15°C",
      info: "cloudy",
    },
    {
      day: "Saturday",
      day_info: "Jule 17",
      icon_id: "sun",
      temp_day: "+18°C",
      temp_night: "+15°C",
      info: "cloudy",
    },
  ];
  return (
    <div>
      <Tabs />
      <div className="days">
        {days.map((day, i) => (
          <Card key={i} item={day} />
        ))}
      </div>
    </div>
  );
};

export default Days;
