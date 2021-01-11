import React from 'react'
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import AppFrame from './../components/AppFrame'
import CityList from './../components/CityList'

const cities = [
    {city: "Montevideo", country: "Uruguay", countryCode:"UY"},
    {city: "Barcelona", country: "Spain", countryCode:"ES"},
    {city: "Queenstown", country: "New Zealand", countryCode:"NZ"},
    {city: "Dublin", country: "Ireland", countryCode:"IE"},
]

const MainPage = () => {
    const history = useHistory()

    const onClickHandler = () => {
        history.push("/city")
    }

    return (
        <AppFrame>
            <Paper elevation={3}>
                <CityList cities={cities} onClickCity={onClickHandler}/>
            </Paper>
        </AppFrame>
    )
}

export default MainPage
