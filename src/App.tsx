import React from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherByHour from "./components/WeatherByHour";
import Next5Days from "./components/Next5Days";

function App() {
  return (
    <main className="main-container">

    <div className="location-and-date">
      <h1 className="location-and-date__location">London, UK</h1>
      <div>Sunday 4th August</div>
    </div>
  
  
    <div className="current-temperature">
      <div className="current-temperature__icon-container">
        <img src="icons/mostly-sunny.svg" className="current-temperature__icon" alt="" />
      </div>
      <div className="current-temperature__content-container">
        <div className="current-temperature__value">21&deg;</div>
        <div className="current-temperature__summary">Mostly Sunny</div>
      </div>
    </div>
  
  
    <div className="current-stats">
      <div>
        <div className="current-stats__value">23&deg;</div>
        <div className="current-stats__label">High</div>
        <div className="current-stats__value">14&deg;</div>
        <div className="current-stats__label">Low</div>
      </div>
      <div>
        <div className="current-stats__value">7mph</div>
        <div className="current-stats__label">Wind</div>
        <div className="current-stats__value">0%</div>
        <div className="current-stats__label">Rain</div>
      </div>
      <div>
        <div className="current-stats__value">05:27</div>
        <div className="current-stats__label">Sunrise</div>
        <div className="current-stats__value">20:57</div>
        <div className="current-stats__label">Sunset</div>
      </div>
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
        <Next5Days date='30/7' day='Tue' temperatureInCelsius={14} chanceOfRain={0}/>
      </div>
    </div>
  
  </main>
  );
}

export default App;
