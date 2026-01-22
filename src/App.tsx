

import { MapContainer } from 'react-leaflet'
import './App.css'
import { NavBar } from './components/NavBar/NavBar.tsx'
import { WeatherFetch } from './components/WeatherFetch/WeatherFetch.tsx'
import { WeatherForecast } from './components/WeatherForecast/WeatherForecast.tsx'
import { Leaflet } from './components/Leaflet/Leaflet.tsx'

function App() {

  return (
    <>
      <NavBar>
        <li><a href="#">Home</a></li>
        <li><a href="#current">Current Weather</a></li>
        <li><a href="#3day">3 day forecast</a></li>
        <li><a href="#leaflet">Leaflet</a></li>
      </NavBar>
      <WeatherFetch id='current'/>
      <WeatherForecast id='3day'/>

      
      <Leaflet id='leaflet'/>
    </>
  )
}

export default App
