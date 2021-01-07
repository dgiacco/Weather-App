import React from 'react'
import ForecastItem from './ForecastItem'

export default {
    title: "ForecastItem",
    component: ForecastItem
}

export const sunnyMonday = () => (
    <ForecastItem weekDay="Monday" hour={18} state="sunny" temperature={25} />)