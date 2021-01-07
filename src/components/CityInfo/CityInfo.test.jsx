import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo'

test("CityInfo render", async () => {

    const city = "Montevideo"
    const country = "Uruguay"

    //Render: renderiza el componente y retorna una serie de funciones de utilidad
    //En este caso utilizamos "findAllByRole" para consultar a nuestro componente
    const { findAllByRole } = render(<CityInfo city={ city } country={ country } />)

    //En este caso findAllByRole nos va a buscar todos los componentes que sean "heading" => H1, H2, etc
    //El resultado es un array de componentes (cityAndCoutryComponents)
    const cityAndCountryComponents = await findAllByRole("heading")

    //Cuando el test va a ser correcto?
    //Cuando en el primer elemento "heading" se encuentre la ciudad "Montevideo"
    //Cuando en el segundo elemento "heading" se encuentre el pais "Uruguay"

    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)
}) 