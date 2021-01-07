import React from 'react'
import { render } from '@testing-library/react'
import WeatherDetails from './WeatherDetails'

test("WeatherDetails render", async () => {
    const { findByText } = render(<WeatherDetails humidity={20} wind={30} />)

    const humidity = await findByText(/20/)
    const wind = await findByText(/30/)

    expect(humidity).toHaveTextContent("Humidity: 20%")
    expect(wind).toHaveTextContent("Wind: 30 km/h")
})