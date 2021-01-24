import { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { getForecastUrl } from './../Utils/urls'
import getChartData from './../Utils/transform/getChartData'
import { getCityCode } from './../Utils/utils'
import getForecastItemList from './../Utils/transform/getForecastItemList'

const useCityPage = (allChartData, allForecastItemList, onSetChartData, onSetForecastItemList) => {
    
    const { city, countryCode } = useParams()

    useEffect(() => {

        const getForecast = async () => {
            
            const url = getForecastUrl({city, countryCode})
            const cityCode = getCityCode(city, countryCode)

            try {
                const { data } = await axios.get(url)

                const dataAux = getChartData(data)

                onSetChartData({ [cityCode] : dataAux})

                const forecastItemListAux = getForecastItemList(data)

                onSetForecastItemList({ [cityCode] : forecastItemListAux})
            } catch (error) {

            }
        }      
        const cityCode = getCityCode(city, countryCode)
        
        if(allChartData && allForecastItemList && !allChartData[cityCode] && !allForecastItemList[cityCode])
        {
            getForecast()
        }
        
    }, [city, countryCode, onSetChartData, onSetForecastItemList])

    return { city, countryCode }
}

export default useCityPage