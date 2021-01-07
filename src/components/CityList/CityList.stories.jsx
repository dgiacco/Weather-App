import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

export default {
    title: "CityList",
    component: CityList
}

const cities = [
    {city: "Montevideo", country: "Uruguay"},
    {city: "Barcelona", country: "Spain"},
    {city: "Queenstown", country: "New Zealand"},
    {city: "Dublin", country: "Ireland"},
]

export const CityListExample = () => <CityList cities={cities} onClickCity={action("Click en city")} />