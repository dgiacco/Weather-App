import React from 'react'
import PropTypes from 'prop-types'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts' 

const ForecastChart = ({ data }) => {
    return (
        <ResponsiveContainer height={250} width={"95%"}>
            <LineChart
                margin={{ top: 20, bottom: 20, right: 5, left: 5 }}
                data={data}>
                <XAxis dataKey="dayHour"></XAxis>
                <YAxis></YAxis>
                <CartesianGrid></CartesianGrid>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Line type="monotone" dataKey="max" stroke="red"></Line>
                <Line type="monotone" dataKey="min" stroke="blue"></Line>
            </LineChart>
        </ResponsiveContainer>
    )
}

ForecastChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            dayHour: PropTypes.string.isRequired,
            min: PropTypes.number.isRequired,
            max: PropTypes.number.isRequired,
        })
    ).isRequired,
}

export default ForecastChart
