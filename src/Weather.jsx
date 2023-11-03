import './Weather.css'
import React, { useState } from 'react'
const Weather = () => {
  const api={
    key:"c383e740ecf5afeee9a62afb0793973a",
    base:"https://api.openweathermap.org/data/2.5/"
  }
  const[search ,setSearch]=useState("")
  const[weather,setWeather]=useState({})
  function searchPress(){
    fetch(`${api.base}/weather?q=${search}&APPID=${api.key}`)
    .then(res=>res.json())
    .then(data=>setWeather(data))
  }
  return (
    <center id='cent'>
    <div className='Weather'>
        <h2>Weather App</h2>
      <center><input id='inp' type="text" onChange={(e)=>setSearch(e.target.value)} placeholder='Enter city name' /></center>
      <br />
      <center><button id='btn' onClick={searchPress}>Search</button></center>
      {(typeof weather.main!=="undefined") ?
      <div className='main'>
        <p>Name:{weather.name}</p>
        <p>Temperature:{weather.main.temp}</p>
        <p>Main:{weather.weather[0].main}</p>
        <p>Description:{weather.weather[0].description}</p>
      </div>:("Error: City Not Found")}
      
    </div>
    </center>
    
  )
}
export default Weather


