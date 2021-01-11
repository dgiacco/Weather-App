import React, { Component } from 'react'
import Weather from './Weather'

export default {
    title: "Weather",
    component: Weather 
}

export const weatherCloud = () => <Weather temperature={10} state="clouds" />

export const weatherSunny = () => <Weather temperature={10} state="clear" />
