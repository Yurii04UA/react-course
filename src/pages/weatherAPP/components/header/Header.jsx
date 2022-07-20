import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useTheme } from "../../hooks/useTheme";
import "./Header.scss";
import logo from "./logo.png";
import icon from "./switch_theme.png";


const Header = ({changeCity}) => {
  const changeCitys =changeCity
  const themeGlobal = useContext(ThemeContext);
  // const [thema, setThema] = useState("light");
  const changeTheme = () => {
    // setThema(thema === "light" ? "dark" : "light");
    // themeGlobal.changeTheme(themeGlobal.theme === 'light'? "dark" : "light")
    themeGlobal.changeTheme();
  };
const change =(e) => {
  changeCitys(e.target.value)
}
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
        <select onChange={change} className="select">
          <option value="select">Select city</option>
          <option value="location">Your location</option>
          <option value="Dnipro">Dnipro</option>
          <option value="Kiev">Kyiv</option>
          <option value="Kharkiv">Kharkiv</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
