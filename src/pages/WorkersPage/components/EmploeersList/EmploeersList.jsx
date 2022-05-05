import React from "react";
import "./EmploeersList.css";
import EmploeersListItem from "../EmploeersListItem/EmploeersListItem";

const EmploeersList = ({ data ,onDelete, onToggleIncrease, onToggleLike}) => {

  const elemEmployees = data.map((item)=>{
      const {id, ...itemProps} = item
    return (
      <EmploeersListItem 
        name={item.name} 
        salary={item.salary} 
        key={item.id} 
        increase={item.increase} 
        like={item.like}
        onDelete={() => onDelete(id)}
        onToggleIncrease={() => onToggleIncrease(id) }
        onToggleLike={() => onToggleLike(id)}
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
