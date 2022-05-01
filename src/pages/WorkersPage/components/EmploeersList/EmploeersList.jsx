import React from "react";
import "./EmploeersList.css";
import EmploeersListItem from "../EmploeersListItem/EmploeersListItem"

const EmploeersList = () => {
  return <ul className="app-list list-group">
            <EmploeersListItem />
            <EmploeersListItem />
            <EmploeersListItem />
         </ul>
};

export default EmploeersList;
