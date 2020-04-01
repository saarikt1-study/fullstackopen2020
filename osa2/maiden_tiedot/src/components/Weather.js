import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ city }) => {
  const [ weather, setWeather ] = useState()
  const api_key = process.env.REACT_APP_API_KEY

  useEffect(() => {
    axios
      .get('http://api.openweathermap.org/data/2.5/weather', {
        params: {
          q:city,
          appid:api_key,
          units:'metric'
        }
      })
      .then(response => {
        setWeather(response.data)
      })
    
  }, [])
  
  if (weather) {
    return (
      <div>
        <h3>Weather in {city}</h3>
        <p><b>Temperature:</b> {weather.main.temp}</p>
        <p><b>Wind:</b> {weather.wind.speed}</p>
        <p><b>Conditions:</b> {weather.weather[0].description}</p>
      </div>
    )
  }
  return null
}

export default Weather