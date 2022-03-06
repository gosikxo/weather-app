import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherByHour from "./components/WeatherByHour";
import Next5Days from "./components/Next5Days";
import CurrentTemperature from './components/CurrentTemperature';
import LocationAndDate from './components/LocationAndDate';
import CurrentStats from './components/CurrentStats';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

function epochToIsoDate(epoch: number): Date {
  return new Date(epoch * 1000);
}

function formatDate(date: Date): string {
  return `${date.getHours()}:${date.getMinutes() < 10 ? "0" : ""}${date.getMinutes()}`
}

type Weather = {
  temperature: number,
  windSpeed: number,
  sunriseTime: Date,
  sunsetTime: Date,
  uvIndex: number,
  humidity: number,
  feelsLike: number,
  hourlyWeather: Array<{ date: Date, temperature: number }>
}

type City = { id: number, name: string, latitude: number, longitude: number }

function App() {
  const [weather, setWeather] = useState<Weather | null>(null)
  const [selectedCity, selectCity] = useState<City>({ id: 1, latitude: 51.509648, name: "London, UK", longitude: -0.099076 })
  const [cities, setCities] = useState<Array<City>>([])

  useEffect(() => {
    fetch(`https://weatherapp.bitsky.workers.dev/data/2.5/onecall?units=metric&lat=${selectedCity.latitude}&lon=${selectedCity.longitude}&cnt=7`)
      .then(res => res.json())
      .then(res => {
        setWeather({
          ...res,
          temperature: res.current.temp,
          windSpeed: res.current.wind_speed,
          sunriseTime: epochToIsoDate(res.current.sunrise),
          sunsetTime: epochToIsoDate(res.current.sunset),
          uvIndex: res.current.uvi,
          humidity: res.current.humidity,
          feelsLike: res.current.feels_like,
          hourlyWeather: (res.hourly as Array<{ dt: number, temp: number }>).filter((item, idx) => {
            if (idx < 7) {
              return true;
            }
          }).map(item => {
            return { date: epochToIsoDate(item.dt), temperature: item.temp }
          })
        })
      })
  }, [selectedCity]);

  if (weather == null) {
    return <div>Loading...</div>
  }

  return (
    <main className="main-container">

      <div className="location-and-search">
        <div className="location-and-date">
          <LocationAndDate location={selectedCity.name} date='Sunday 4th August' />
        </div>

        <div className='search'>
          <ReactSearchAutocomplete items={cities}
            onSelect={city => {
              selectCity(city)
            }}

            onSearch={keyword => {
              if (keyword.length === 0) {
                return;
              }
              fetch(`https://weatherapp.bitsky.workers.dev/location?query=${keyword}`)
                .then(res => res.json())
                .then(res => {
                  setCities((res.data as Array<any>).map((el, idx) => {
                    return { id: idx, latitude: el.latitude, longitude: el.longitude, name: el.label }
                  }))
                })
            }}></ReactSearchAutocomplete>
        </div>
      </div>
      <div className="current-temperature">
        <CurrentTemperature weatherType="mostly-sunny" temperature={weather.temperature.toFixed(1)} sunny="Mostly Sunny" />
      </div>


      <div className="current-stats">
        <CurrentStats uvIndex={weather.uvIndex} humidity={weather.humidity} windSpeed={weather.windSpeed} feelsLike={weather.feelsLike.toFixed(1)} sunrise={formatDate(weather.sunriseTime)} sunset={formatDate(weather.sunsetTime)} />
      </div>

      <div className="weather-by-hour">
        <h2 className="weather-by-hour__heading">Today's weather</h2>
        <div className="weather-by-hour__container">
          {
            weather.hourlyWeather.map(item => {
              return <WeatherByHour temperatureInCelsius={item.temperature.toFixed(1)} hour={formatDate(item.date)} weatherType='mostly-sunny'></WeatherByHour>
            })
          }
        </div>
      </div>
      <div className="next-5-days">
        <h2 className="next-5-days__heading">Next 5 days</h2>
        <div className="next-5-days__container">
          <Next5Days date='30/7' day='Tue' weatherType="mostly-sunny" temperatureInCelsiusLow={14} temperatureInCelsiusHigh={16} chanceOfRain={0} windSpeed={14} />
          <Next5Days date='31/7' day='Wed' weatherType="sunny" temperatureInCelsiusLow={16} temperatureInCelsiusHigh={18} chanceOfRain={20} windSpeed={16} />
          <Next5Days date='1/8' day='Thu' weatherType="mostly-sunny" temperatureInCelsiusLow={4} temperatureInCelsiusHigh={9} chanceOfRain={31} windSpeed={64} />
          <Next5Days date='2/8' day='Fri' weatherType="mostly-sunny" temperatureInCelsiusLow={14} temperatureInCelsiusHigh={16} chanceOfRain={100} windSpeed={53} />
          <Next5Days date='3/8' day='Sat' weatherType="sunny" temperatureInCelsiusLow={15} temperatureInCelsiusHigh={20} chanceOfRain={0} windSpeed={2} />
        </div>
      </div>

    </main>
  );
}

export default App;
