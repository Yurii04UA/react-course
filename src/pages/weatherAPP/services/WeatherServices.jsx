import axios from "axios";
import api from "../axios/axios";

export class WeatherServise{
   static getCurrentWeather(city){
      return api.get(`/weather?q={${city}}`)
   }
}