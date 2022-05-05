import React from "react";
import "./EmploeersList.css";
import EmploeersListItem from "../EmploeersListItem/EmploeersListItem";

const EmploeersList = ({ data ,onDelete}) => {

  const elemEmployees = data.map((item)=>{
      const {id, ...itemProps} = item
    return (
      <EmploeersListItem 
        name={item.name} 
        salary={item.salary} 
        key={item.id} 
        increase={item.increase} 
        onDelete={() => onDelete(id)}
        />  /// можно написать {...itemProps} просто развернет весь обьект {name: 'Yurii'} и тд
    );
  })
  return (
    <ul className="app-list list-group">
      {elemEmployees}
    </ul>
  );
};

export default EmploeersList;
