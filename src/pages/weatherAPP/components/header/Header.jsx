import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useTheme } from "../../hooks/useTheme";
import "./Header.scss";
import logo from "./logo.png";
import icon from "./switch_theme.png";

const Header = () => {
  const themeGlobal = useContext(ThemeContext);
  // const [thema, setThema] = useState("light");
  const changeTheme = () => {
    // setThema(thema === "light" ? "dark" : "light");
    // themeGlobal.changeTheme(themeGlobal.theme === 'light'? "dark" : "light")
    themeGlobal.changeTheme();
  };

  return (
    <div className="header">
      <div className="wrapper">
        <img src={logo} alt="logo" />
        <h2>Weather app</h2>
      </div>
      <div className="wrapper">
        <div className="img" onClick={changeTheme}>
          <p>Switch theme</p>
          <img src={icon} alt="icon_select_theme"  />
        </div>
        <select className="select">
          <option value="select">Select city</option>
          <option value="location">Your location</option>
          <option value="Dnipro">Dnipro</option>
          <option value="Kiev">Kiev</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
