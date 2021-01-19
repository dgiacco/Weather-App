const cities = [
    {city: "Montevideo", country: "Uruguay", countryCode:"UY"},
    {city: "Barcelona", country: "Spain", countryCode:"ES"},
    {city: "Queenstown", country: "New Zealand", countryCode:"NZ"},
    {city: "Dublin", country: "Ireland", countryCode:"IE"},
]

export const getCities = () => (cities)

export const getCountryNameByCountryCode = (countryCode) => (
    cities.filter(c => c.countryCode === countryCode)[0].country
)