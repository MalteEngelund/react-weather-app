

import './App.css'
import { WeatherFetch } from './components/WeatherFetch/WeatherFetch.tsx'
import { WeatherForecast } from './components/WeatherForecast/WeatherForecast.tsx'

function App() {

  return (
    <>
      <WeatherFetch />
      <WeatherForecast />
    </>
  )
}

export default App
