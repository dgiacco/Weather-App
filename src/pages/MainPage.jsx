import React from 'react'
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import AppFrame from './../components/AppFrame'
import CityList from './../components/CityList'

const cities = [
    {city: "Montevideo", country: "Uruguay"},
    {city: "Barcelona", country: "Spain"},
    {city: "Queenstown", country: "New Zealand"},
    {city: "Dublin", country: "Ireland"},
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
