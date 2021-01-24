import { useState, useEffect } from 'react'
import axios from 'axios'   
import { getWeatherUrl } from './../Utils/urls'
import getAllWeather from '../Utils/transform/getAllWeather'
import { getCityCode } from './../Utils/utils'

const useCityList = (cities, allWeather, onSetAllWeather) => {
    // const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            
            const url = getWeatherUrl({city, countryCode})

            try {
                const propName = getCityCode(city, countryCode)

                onSetAllWeather({ [propName]: {} })

                const response = await axios.get(url)
                
                const allWeatherAux = getAllWeather(response, city, countryCode)

                onSetAllWeather(allWeatherAux)
                
            } catch (error) {
                if(error.response) {
                    setError("An error has occurred in the server")
                } else if(error.request) {
                    setError("Please verify your internet connection")
                } else {
                    setError("Error loading data")
                }
            }
        }

        cities.forEach(({ city, countryCode }) => {
            if(!allWeather[getCityCode(city, countryCode)]) {
                setWeather(city, countryCode)
            }
        });
    }, [cities, allWeather, onSetAllWeather])

    return { error, setError }
}

export default useCityList