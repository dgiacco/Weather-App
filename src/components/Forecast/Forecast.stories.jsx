import React from 'react'
import Forecast from './Forecast'

export default {
    title: "Forecast",
    component: Forecast
}

const forecastItemList = [
    {weekDay: "Monday", hour: 15, state: "clear", temperature: 20},
    {weekDay: "Tuesday", hour: 18, state: "rain", temperature: 9},
    {weekDay: "Wednesday", hour: 10, state: "clouds", temperature: 20},
    {weekDay: "Thursday", hour: 8, state: "snow", temperature: 14},
    {weekDay: "Friday", hour: 22, state: "thunderstorm", temperature: 22},
]

export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList} />) 