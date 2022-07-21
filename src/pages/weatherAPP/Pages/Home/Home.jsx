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
  const [daily,setDaily] = useState([])

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
    // console.log(new Date(1658368800));
    // console.log(Date.now());
  }, [city]);

    useEffect(() => {
      setIsLoading(true);
     if(latitude != undefined){
      const lat = data.coord.lat
      const lon = data.coord.lon
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&units=metric&appid=3a14ed878c17ea88667c02de9b9be534`).then(res => res.json()).then(data=> setDaily(data.daily)).then(() => setIsLoading(false));
     }
    },[data])
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

      <Days daily={daily} loading={isLoading}/>
      {/* <Popup /> */}
    </div>
  );
};

export default Home;
