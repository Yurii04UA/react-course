import React, { useEffect } from "react";
import { useState } from "react";
import "./Header.scss";
import logo from "./logo.png";
import icon from "./switch_theme.png";

const Header = () => {
  const [thema, setThema] = useState("light");
  const changeTheme = () => {
    setThema(thema === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const root = document.querySelector(":root");
    const components = [
      '--components-backround-',
      '--card-backround-',
      '--text-color-',
      '--shadow-color-',
    ]
    components.forEach(elem =>{
      root.style.setProperty(
        `${elem}default`,
        `var(${elem}${thema})`
      );
    })
    // root.style.setProperty(
    //   "--components-backround-default",
    //   `var(--components-backround-${thema})`
    // );

    // root.style.setProperty(
    //   "--card-backround-default",
    //   `var(--card-backround-${thema})`
    // );

    // root.style.setProperty(
    //   "--text-color-default",
    //   `var(--text-color-${thema})`
    // );
    // root.style.setProperty(
    //   "--shadow-color-default",
    //   `var(--shadow-color-${thema})`
    // );
  }, [thema]);
  return (
    <div className="header">
      <div className="wrapper">
        <img src={logo} alt="logo" />
        <h2>Weather app</h2>
      </div>
      <div className="wrapper">
        <img src={icon} alt="icon_select_theme" onClick={changeTheme} />
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
