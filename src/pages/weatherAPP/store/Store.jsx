import { combineReducers, configureStore } from '@reduxjs/toolkit'
import CurrentWeatherSliceReduser from './slices/CurrentWeatherSlice'

const rootReduser = combineReducers({
   CurrentWeatherSliceReduser
})

export const Store = configureStore({
   reducer: rootReduser
})


 


