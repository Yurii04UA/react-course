import React, { useEffect } from "react";
import ThisDay from "./components/ThisDay/ThisDay";
import ThisDayInfo from "./components/ThisDayInfo/ThisDayInfo";
import Days from "./components/Days/Days";
import Popup from "../../components/Popup/Popup";
import { fetchCurrentWeather } from "../../store/slices/thunks/fetchCurrentWeather";
import "./Home.scss";
import { NavLink } from "react-router-dom";
import Header from "../../components/header/Header";
import { useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("dnipro");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true)
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3a14ed878c17ea88667c02de9b9be534`
    )
      .then((res) => res.json())
      .then((data) => setData(data)).then(()=> setIsLoading(false));
    ;
    // console.log(1658236389);
    // console.log(Date.now());
  }, [city]);
  return (
    <div className="container-weather">
      <NavLink to="additional-statistics">sd</NavLink>
      <Header />
      <div className="thisDayWrapper">
        <ThisDay data={data} loading={isLoading} />
        <ThisDayInfo />
      </div>

      <Days />
      {/* <Popup /> */}
    </div>
  );
};

export default Home;
