import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherByHour from "./components/WeatherByHour";
import Next5Days from "./components/Next5Days";
import CurrentTemperature from './components/CurrentTemperature';
import LocationAndDate from './components/LocationAndDate';
import CurrentStats from './components/CurrentStats';

function epochToIsoDate(epoch: number): Date {
  return new Date(epoch*1000);
}

function formatDate(date: Date): string {
  return `${date.getHours()}:${date.getMinutes()}`
}

function App() {
  const [weather, setWeather] = useState<{temperature: number, windSpeed: number, sunriseTime: Date, sunsetTime: Date, uvIndex: number, humidity: number, feelsLike: number} | null>(null)

  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/onecall?units=metric&lat=51.509648&lon=-0.099076&cnt=7&appid=63720269397e341964deae216e3952b5")
    .then(res => res.json())
    .then(res => {
      setWeather({...res, 
        temperature: res.current.temp, 
        windSpeed: res.current.wind_speed, 
        sunriseTime: epochToIsoDate(res.current.sunrise),
        sunsetTime: epochToIsoDate(res.current.sunset),
        uvIndex: res.current.uvi,
        humidity: res.current.humidity,
        feelsLike: res.current.feels_like
      })
    })
  }, []);

  if(weather == null) {
    return <div>Loading...</div>
  }

  console.log(weather);

  return (
    <main className="main-container">

    <div className="location-and-date">
      <LocationAndDate location='London, UK' date='Sunday 4th August' />
    </div>
  
    <div className="current-temperature">
      <CurrentTemperature weatherType="mostly-sunny" temperature={weather.temperature.toFixed(1)} sunny="Mostly Sunny"/>
    </div>
  
  
    <div className="current-stats">
      <CurrentStats uvIndex={weather.uvIndex} humidity={weather.humidity} windSpeed={weather.windSpeed} feelsLike={weather.feelsLike.toFixed(1)} sunrise={formatDate(weather.sunriseTime)} sunset={formatDate(weather.sunsetTime)}/>
    </div>
  
    <div className="weather-by-hour">
      <h2 className="weather-by-hour__heading">Today's weather</h2>
      <div className="weather-by-hour__container">
        <WeatherByHour weatherType="mostly-sunny" hour="3am" temperatureInCelsius={14}  />
        <WeatherByHour weatherType="mostly-sunny" hour="6am" temperatureInCelsius={16}  />
        <WeatherByHour weatherType="mostly-sunny" hour="9am" temperatureInCelsius={17}  />
        <WeatherByHour weatherType="mostly-sunny" hour="12pm" temperatureInCelsius={19}  />
        <WeatherByHour weatherType="sunny" hour="3pm" temperatureInCelsius={21}  />
        <WeatherByHour weatherType="sunny" hour="6pm" temperatureInCelsius={20}  />
        <WeatherByHour weatherType="mostly-sunny" hour="9pm" temperatureInCelsius={19}  />
      </div>
    </div>
    <div className="next-5-days">
      <h2 className="next-5-days__heading">Next 5 days</h2>
      <div className="next-5-days__container">
        <Next5Days date='30/7' day='Tue' weatherType="mostly-sunny" temperatureInCelsiusLow={14} temperatureInCelsiusHigh={16} chanceOfRain={0} windSpeed={14}/>
        <Next5Days date='31/7' day='Wed' weatherType="sunny" temperatureInCelsiusLow={16} temperatureInCelsiusHigh={18} chanceOfRain={20} windSpeed={16}/>
        <Next5Days date='1/8' day='Thu' weatherType="mostly-sunny" temperatureInCelsiusLow={4} temperatureInCelsiusHigh={9} chanceOfRain={31} windSpeed={64}/>
        <Next5Days date='2/8' day='Fri' weatherType="mostly-sunny" temperatureInCelsiusLow={14} temperatureInCelsiusHigh={16}chanceOfRain={100} windSpeed={53}/>
        <Next5Days date='3/8' day='Sat' weatherType="sunny" temperatureInCelsiusLow={15} temperatureInCelsiusHigh={20} chanceOfRain={0} windSpeed={2}/>
      </div>
    </div>
  
  </main>
  );
}

export default App;
