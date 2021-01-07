import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import CityList from './CityList'

const cities = [
    {city: "Montevideo", country: "Uruguay"},
    {city: "Barcelona", country: "Spain"},
    {city: "Queenstown", country: "New Zealand"},
]

test("CityList renders", async () => {
    const { findAllByRole } = render(<CityList cities={cities} />)
    
    const items = await findAllByRole("button")

    expect(items).toHaveLength(3)
})

test("CityList click on item", async () => {
    const fnClickOnItem = jest.fn()

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items = await findAllByRole("button")

    fireEvent.click(items[0])

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})