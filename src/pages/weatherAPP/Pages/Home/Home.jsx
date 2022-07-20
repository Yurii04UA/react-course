import React, { useEffect } from "react";
import ThisDay from "./components/ThisDay/ThisDay";
import ThisDayInfo from "./components/ThisDayInfo/ThisDayInfo";
import Days from "./components/Days/Days";
import Popup from "../../components/Popup/Popup";

import "./Home.scss";
import { NavLink } from "react-router-dom";
import Header from "../../components/header/Header";
import { useState } from "react";
import Fetch from "../../fetch/FetchCity";
import UsePosition from "../../hooks/UsePosition";
import FetchLocation from "../../fetch/FetchLocation";

const Home = () => {
  const [data, setData] = useState([]);
  const [city, setCity] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { latitude, longitude, error, load } = UsePosition();

  const changeCity = (props) => {
    setCity(props);
  };

  useEffect(() => {
   if(latitude != undefined){
    FetchLocation(latitude, longitude).then((data) => setCity(data.name));
   }
  }, [latitude]);
  useEffect(() => {
    setIsLoading(true);

    if(city){
      Fetch(city)
      .then((data) => setData(data))
      .then(() => setIsLoading(false));

    }
    // console.log(1658236389);
    // console.log(Date.now());
  }, [city]);
  return (
    <div className="container-weather">
      <NavLink to="additional-statistics">sd</NavLink>

      <div>{latitude}</div>
      <div>{longitude}</div>

      <Header changeCity={changeCity} />
      <div className="thisDayWrapper">
        <ThisDay data={data} loading={isLoading} />
        <ThisDayInfo data={data} loading={isLoading} />
      </div>

      <Days />
      {/* <Popup /> */}
    </div>
  );
};

export default Home;
