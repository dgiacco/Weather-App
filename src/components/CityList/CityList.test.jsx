import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import CityList from './CityList'

const cities = [
    {city: "Montevideo", country: "Uruguay", countryCode:"UY"},
    {city: "Barcelona", country: "Spain", countryCode:"ES"},
    {city: "Queenstown", country: "New Zealand", countryCode:"NZ"},
    {city: "Dublin", country: "Ireland", countryCode:"IE"},
]

test("CityList renders", async () => {
    const { findAllByRole } = render(<CityList cities={cities} onClickCity={() => {}}/>)
    
    const items = await findAllByRole("button")

    expect(items).toHaveLength(4)
})

test("CityList click on item", async () => {
    const fnClickOnItem = jest.fn()

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items = await findAllByRole("button")

    fireEvent.click(items[0])

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})