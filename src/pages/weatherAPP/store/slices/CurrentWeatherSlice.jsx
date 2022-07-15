import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   weater: {},
   isLoading: false,
   response: {
      status: 0,
      message: ''
   }
}

export const CurrentWeatherSlice = createSlice({
   name:'cuurent_weather',
   initialState,
   reducers: {
      fetchCurrentWeather(state){
         state.isLoading = true
      },
      fetchCurrentWeatherSuccess(state, action){
         state.weater = action.payload.data;
         state.isLoading = false;
         state.response = {
            status: action.payload.status,
            message: action.payload.statusTexy
         }
      }
   }

})

export default CurrentWeatherSlice.reducer