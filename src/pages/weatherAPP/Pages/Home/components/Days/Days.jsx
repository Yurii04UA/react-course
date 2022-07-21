import React from "react";
import Card from "./Card";
import "./Days.scss";
import Tabs from "./Tabs";

const Days = ({daily,loading}) => {
  const days = daily
  return (
    <div>
      <Tabs />
      <div className="days">
        {days.map((day, i) => (
          <Card key={i} item={day} loading={loading} />
        ))}
      </div>
    </div>
  );
};

export default Days;
