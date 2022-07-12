import React from "react";
import ThisDay from "./components/ThisDay/ThisDay";
import ThisDayInfo from "./components/ThisDayInfo/ThisDayInfo";
import Days from "./components/Days/Days";

import "./Home.scss";
import { NavLink } from "react-router-dom";
import Header from "../../components/header/Header";


const Home = () => {
  return (
    <div className="container-weather">
      <NavLink to="additional-statistics">sd</NavLink>
      <Header />
      <div className="thisDayWrapper">
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  );
};

export default Home;
