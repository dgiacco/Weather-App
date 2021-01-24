import React, { useMemo } from 'react'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import AppFrame from './../components/AppFrame'
import CityInfo from './../components/CityInfo'
import Forecast from './../components/Forecast'
import ForecastChart from './../components/ForecastChart'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import useCityPage from './../Hooks/useCityPage'
import useCityList from './../Hooks/useCityList'
import { getCityCode } from './../Utils/utils'
import { getCountryNameByCountryCode } from './../Utils/serviceCities'

const CityPage = ({ actions, data }) => {
    const { onSetAllWeather, onSetChartData, onSetForecastItemList } = actions
    const { allWeather, allChartData, allForecastItemList } = data

    const { city, countryCode } = useCityPage(allChartData, allForecastItemList, onSetChartData, onSetForecastItemList)

    const cities = useMemo(() => ([{ city, countryCode }]), [city, countryCode])

    useCityList(cities, allWeather, onSetAllWeather)

    const cityCode = getCityCode(city, countryCode)

    const weather = allWeather[cityCode]
    const chartData = allChartData[cityCode]
    const forecastItemList = allForecastItemList[cityCode]

    const country = getCountryNameByCountryCode(countryCode)
    const humidity = weather && weather.humidity
    const wind = weather && weather.wind

    const state = weather && weather.state
    const temperature = weather && weather.temperature


    return (
        <AppFrame>
            <Grid container
                justify="space-around"
                direction="column"
                spacing={2}>
                <Grid container item
                    xs={12}
                    justify="center"
                    alignItems="flex-end"> 
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid container item xs={12}
                    justify="center">
                    <Weather state={state} temperature={temperature} />
                    {
                        humidity && wind && 
                        <WeatherDetails 
                            humidity={humidity} 
                            wind={wind} />
                    }
                </Grid>
                <Grid item>
                    {
                        !chartData && !forecastItemList && <LinearProgress />
                    }
                </Grid>
                <Grid item>
                    {
                        chartData && <ForecastChart data={chartData} />
                    }
                </Grid>
                <Grid item>
                    {
                        forecastItemList && <Forecast forecastItemList={forecastItemList} />
                    }
                </Grid>
            </Grid>
        </AppFrame>
    )
}

export default CityPage

