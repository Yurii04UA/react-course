import React, { useEffect } from "react";
import ThisDay from "./components/ThisDay/ThisDay";
import ThisDayInfo from "./components/ThisDayInfo/ThisDayInfo";
import Days from "./components/Days/Days";
import Popup from "../../components/Popup/Popup"
import { fetchCurrentWeather } from "../../store/slices/thunks/fetchCurrentWeather";
import "./Home.scss";
import { NavLink } from "react-router-dom";
import Header from "../../components/header/Header";

const Home = () => {
  useEffect(()=>{
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Dnipro&units=metric&appid=3a14ed878c17ea88667c02de9b9be534').then(res => res.json()).then(e => console.log(e))
    console.log(new Date(1658062441341));
    console.log(Date.now());
  },[])
  return (
    
      <div className="container-weather">
        <NavLink to="additional-statistics">sd</NavLink>
        <Header />
        <div className="thisDayWrapper">
          <ThisDay />
          <ThisDayInfo />
        </div>

        <Days />
        {/* <Popup /> */}
      </div>
  );
};

export default Home;
