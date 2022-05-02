import React from "react";
import "./EmploeersList.css";
import EmploeersListItem from "../EmploeersListItem/EmploeersListItem";

const EmploeersList = ({ data }) => {

  const elemEmployees = data.map((item)=>{
    
    return (
      <EmploeersListItem name={item.name} salary={item.salary} key={item.id} increase={item.increase} />  /// можно написать {...item} просто развернет весь обьект
    );
  })
  return (
    <ul className="app-list list-group">
      {elemEmployees}
    </ul>
  );
};

export default EmploeersList;
