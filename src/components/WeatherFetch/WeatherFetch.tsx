import { useState, useEffect } from "react"
import style from './WeatherFetch.module.scss'


interface WeatherFetchProps {
  id?: string
}

export function WeatherFetch({ id }: WeatherFetchProps) {

  const weatherUrl = 'https://api.open-meteo.com/v1/forecast?latitude=57.048&longitude=9.9187&current_weather=true&timezone=auto'

  const [weatherData, setWeatherData] = useState<any>()

  useEffect(() => {
    fetch(weatherUrl)
    .then(res => res.json())
    .then(data => setWeatherData(data))
  }, [])

  console.log(weatherData);

  return (
    <div className={style.currentWeatherContainer} id={id}>
      {weatherData && weatherData.current_weather ? (
        <div className={style.currentWeather}>
          <h2>Current Weather</h2>
          <div>
            <h3>Today</h3>
            <p>Temperature: {weatherData.current_weather.temperature} °C</p>
            <p>Wind Speed: {weatherData.current_weather.windspeed} km/h</p>
          </div>
        </div>
      ) : (
        <p>Loading forecast...</p>
      )
    } 
    </div>
  )
}