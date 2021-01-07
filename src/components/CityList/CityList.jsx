import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CityInfo from './../CityInfo'
import Weather from './../Weather'

const renderCityAndCountry = (eventOnClickCity) => {
    const renderCityAndCoutryInternal = cityAndCountry => {
        const {city, country} = cityAndCountry

        return (
            <ListItem button key={city} onClick={eventOnClickCity}>
                <Grid container 
                    justify="center"
                    alignItems="center"
                >
                    <Grid item
                        md={9}
                        xs={12}>
                        <CityInfo city={city} country={country} />
                    </Grid>
                    <Grid item
                        md={3}
                        xs={12}>
                        <Weather temperature={10} state="sunny" />
                    </Grid>        
                </Grid>
            </ListItem>
        )
    }
    return renderCityAndCoutryInternal
}

const CityList = ({ cities, onClickCity }) => {
    const funcAux = renderCityAndCountry(onClickCity)
    return (
        <List>
            {
                cities.map(cityAndCountry => funcAux(cityAndCountry))
            }
        </List>
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList
