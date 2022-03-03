import React from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherByHour from "./components/WeatherByHour";
import Next5Days from "./components/Next5Days";
import CurrentTemperature from './components/CurrentTemperature';
import LocationAndDate from './components/LocationAndDate';
import CurrentStats from './components/CurrentStats';

function App() {
  return (
    <main className="main-container">

    <div className="location-and-date">
      <LocationAndDate location='London, UK' date='Sunday 4th August' />
    </div>
  
    <div className="current-temperature">
      <CurrentTemperature weatherType="mostly-sunny" temperature={20} sunny="Mostly Sunny"/>
    </div>
  
  
    <div className="current-stats">
      <CurrentStats temperatureHigh={23} temperatureLow={14} windSpeed={7} chanceOfRain={20} sunrise={"5:42"} sunset={"20:16"}/>
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
