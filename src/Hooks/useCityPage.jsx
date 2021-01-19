import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { getForecastUrl } from './../Utils/urls'
import getChartData from './../Utils/transform/getChartData'
import getForecastItemList from './../Utils/transform/getForecastItemList'

const useCityPage = () => {
    const [chartData, setChartData] = useState(null)
    const [forecastItemList, setForecastItemList] = useState(null)
    const { city, countryCode } = useParams()

    useEffect(() => {

        const getForecast = async () => {
            
            const url = getForecastUrl({city, countryCode})

            try {
                const { data } = await axios.get(url)

                const dataAux = getChartData(data)

                setChartData(dataAux)

                const forecastItemListAux = getForecastItemList(data)

                setForecastItemList(forecastItemListAux)
            } catch (error) {

            }
        }        
        getForecast()
    }, [city, countryCode])

    return { city, countryCode ,chartData, forecastItemList }
}

export default useCityPage