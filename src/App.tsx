

import './App.css'
import { NavBar } from './components/NavBar/NavBar.tsx'
import { WeatherFetch } from './components/WeatherFetch/WeatherFetch.tsx'
import { WeatherForecast } from './components/WeatherForecast/WeatherForecast.tsx'

function App() {

  return (
    <>
      <NavBar>
        <li><a href="#">Home</a></li>
        <li><a href="#current">Current Weather</a></li>
        <li><a href="#3day">3 day forecast</a></li>
      </NavBar>
      
      <WeatherFetch id='current'/>
      <WeatherForecast id='3day'/>
    </>
  )
}

export default App
