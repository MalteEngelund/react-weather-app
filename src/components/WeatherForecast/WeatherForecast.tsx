import { useState, useEffect } from "react"
import style from './WeatherForecast.module.scss'



interface WeatherForecastProps {
  id?: string
}

export function WeatherForecast({ id }: WeatherForecastProps) {
  const forecastUrl = 'https://api.open-meteo.com/v1/forecast?latitude=57.048&longitude=9.9187&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto'

  const [forecastData, setForecastData] = useState<any>() // import af types driller

  useEffect(() => {
    fetch(forecastUrl)
    .then(res => res.json())
    .then(data => setForecastData(data))
  }, [])

  console.log(forecastData);

  return (
    <div className={style.weatherForecastContainer} id={id}>
      {forecastData && forecastData.daily ? (
        <div className={style.weatherDaily}>
          <h2>Next 3 Days Forecast</h2>
          <div>
          {forecastData.daily.time.slice(1, 4).map((date: string, index: number) => (
            <div key={date}>
              <h3>Date: {date}</h3>
              <p>Max Temp: {forecastData.daily.temperature_2m_max[index]} °C</p>
              <p>Min Temp: {forecastData.daily.temperature_2m_min[index]} °C</p>
            </div>
          ))}
          </div>
        </div>
      ) : (
        <p>Loading forecast...</p>
      )}
    </div>
  )
}