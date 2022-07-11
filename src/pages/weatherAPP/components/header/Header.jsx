import React from "react";
import "./Header.scss";
import logo from './logo.png';
import icon from './switch_theme.png'

const Header = () => {
  return(
    <div className="header">
      <div className="wrapper">
       <img src={logo} alt="logo" />
       <h2>Weather app</h2>
      </div>
      <div className="wrapper">
        <img src={icon} alt="icon_select_theme" />
        <select className="select">
          <option value="select">Select city</option>
          <option value="location">Your location</option>
          <option value="Dnipro">Dnipro</option>
          <option value="Kiev">Kiev</option>
        </select>
      </div>
    </div>
  )
};

export default Header;
