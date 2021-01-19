import { useState, useEffect } from 'react'
import axios from 'axios'   
import { getWeatherUrl } from './../Utils/urls'
import getAllWeather from '../Utils/transform/getAllWeather'

const useCityList = (cities) => {
    const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            
            const url = getWeatherUrl({city, countryCode})

            try {
                const response = await axios.get(url)
                
                const allWeatherAux = getAllWeather(response, city, countryCode)

                setAllWeather(allWeather => ({ ...allWeather, ...allWeatherAux }))
                
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
            setWeather(city, countryCode)
        });
    }, [cities])

    return { allWeather, error, setError }
}

export default useCityList