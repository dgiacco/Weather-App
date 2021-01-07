import React from 'react'
import Grid from '@material-ui/core/Grid'
import AppFrame from './../components/AppFrame'
import CityInfo from './../components/CityInfo'
import Forecast from './../components/Forecast'
import ForecastChart from './../components/ForecastChart'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'

const dataExample = [
    {
        "dayHour": "Jue 18",
        "min": 14,
        "max": 22,
    },
    {
        "dayHour": "Vie 06",
        "min": 18,
        "max": 27,
    },
    {
        "dayHour": "Vie 12",
        "min": 18,
        "max": 30,
    },
    {
        "dayHour": "Vie 18",
        "min": 12,
        "max": 25,
    },
    {
        "dayHour": "Sab 06",
        "min": 14,
        "max": 22,
    },
    {
        "dayHour": "Sab 12",
        "min": 10,
        "max": 19,
    },
]

const forecastItemListExample = [
    {weekDay: "Monday", hour: 15, state: "sunny", temperature: 20},
    {weekDay: "Tuesday", hour: 18, state: "rain", temperature: 9},
    {weekDay: "Wednesday", hour: 10, state: "cloud", temperature: 20},
    {weekDay: "Thursday", hour: 8, state: "fog", temperature: 14},
    {weekDay: "Friday", hour: 22, state: "cloudy", temperature: 22},
]

const CityPage = () => {
    const city="Montevideo"
    const country="Uruguay"
    const state="sunny"
    const temperature=20
    const humidity=70
    const wind=15
    const data= dataExample
    const forecastItemList= forecastItemListExample

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
                    <WeatherDetails humidity={humidity} wind={wind} />
                </Grid>
                <Grid item>
                    <ForecastChart data={data} />
                </Grid>
                <Grid item>
                    <Forecast forecastItemList={forecastItemList} />
                </Grid>
            </Grid>
        </AppFrame>
    )
}

export default CityPage

