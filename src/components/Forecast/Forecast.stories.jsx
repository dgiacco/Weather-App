import React from 'react'
import Forecast from './Forecast'

export default {
    title: "Forecast",
    component: Forecast
}

const forecastItemList = [
    {weekDay: "Monday", hour: 15, state: "sunny", temperature: 20},
    {weekDay: "Tuesday", hour: 18, state: "rain", temperature: 9},
    {weekDay: "Wednesday", hour: 10, state: "cloud", temperature: 20},
    {weekDay: "Thursday", hour: 8, state: "fog", temperature: 14},
    {weekDay: "Friday", hour: 22, state: "cloudy", temperature: 22},
]

export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList} />) 