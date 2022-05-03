import React from "react";
import "./TrainingPage.css";
import Props from "./Props/Props";

import {  Route, Routes, NavLink } from "react-router-dom";

const TrainingPage = () => {
  return (
    <div className="container tr-page">
      <nav className="navBar">
        <NavLink to="/props" className="link">Props</NavLink>
        <NavLink to="/counter" className="link">Counter</NavLink>
      </nav>
     
    </div>
  )
};

export default TrainingPage;
