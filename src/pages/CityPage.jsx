import React from 'react'
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

const CityPage = () => {

    const { city, countryCode, chartData, forecastItemList } = useCityPage()

    const { allWeather } = useCityList([{city, countryCode}])

    const weather = allWeather[getCityCode(city, countryCode)]

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

