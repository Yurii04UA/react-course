import { WeatherServise } from "../../../services/WeatherServices";
import { CurrentWeatherSlice } from "../CurrentWeatherSlice";

export const fetchCurrentWeather = (payload) => async (dispatch) => {
  try {
    dispatch(CurrentWeatherSlice.fetchCurrentWeather());
    const res = await WeatherServise.getCurrentWeather(payload);
    if (res.status === 200) {
      dispatch(CurrentWeatherSlice.fetchCurrentWeatherSuccess(res));
    }
  } catch (e) {
    console.log(e);
  }
};
