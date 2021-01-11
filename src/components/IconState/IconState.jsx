import React from 'react'
import PropTypes from 'prop-types'
import { 
    WiDayCloudy,
    WiRaindrop,
    WiDaySunny,
    WiRain,
    WiSnow,
    WiThunderstorm } from 'react-icons/wi'

export const validValues = ["clouds", "clear", "rain", "snow", "drizzle", "thunderstorm"]

const stateByName = {
    clouds: WiDayCloudy,
    drizzle: WiRaindrop,
    thunderstorm: WiThunderstorm,
    clear: WiDaySunny,
    rain: WiRain,
    snow: WiSnow,
}

const IconState = ({ state }) => {
    const StateByName = stateByName[state]
    return (
        <StateByName />
    )
}

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired,
}

export default IconState
