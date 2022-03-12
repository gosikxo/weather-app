import React, { useEffect, useState } from 'react';
import './App.css';
import WeatherByHour from "./components/WeatherByHour";
import Next5Days from "./components/Next5Days";
import CurrentTemperature from './components/CurrentTemperature';
import LocationAndDate from './components/LocationAndDate';
import CurrentStats from './components/CurrentStats';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { DateTime } from "luxon";

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
  date: Date,
  hourlyWeather: Array<{ date: Date, temperature: number }>,
  dailyWeather: Array<{ dayOfTheWeek: string, date: string, temperature: number, uvIndex: number, feelsLike: number, windSpeed: number}>,
  weatherIconId: string
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
          date: DateTime.fromJSDate(epochToIsoDate(res.current.dt)).toLocaleString(DateTime.DATE_HUGE),
          weatherIconId: res.current.weather[0].icon,
          hourlyWeather: (res.hourly as Array<{ dt: number, temp: number }>).filter((item, idx) => {
            if (idx < 7) {
              return true;
            }
            return false;
          }).map(item => {
            return { date: epochToIsoDate(item.dt), temperature: item.temp }
          }),
          dailyWeather: (res.daily as Array<{dt: number, temp: {day: number}, uvi: number, feels_like: {day: number}, wind_speed: number}>).filter((item, idx) => {
            if (idx < 6) {
              return true;
            }
            return false;
          }).map(item => {
            return { dayOfTheWeek:DateTime.fromJSDate(epochToIsoDate(item.dt)).toFormat("EEE"),  date:DateTime.fromJSDate(epochToIsoDate(item.dt)).toFormat("d/M"), temperature: item.temp.day, uvIndex: item.uvi, feelsLike: item.feels_like.day, windSpeed:item.wind_speed}
          })
        })
      })
  }, [selectedCity]);

  if (weather == null) {
    return <div>Loading...</div>
  }
  
  console.log(weather)

  return (
    <main className="main-container">

      <div className="location-and-search">
        <div className="location-and-date">
          <LocationAndDate location={selectedCity.name} date={weather.date} />
        </div>

        <div className='search'>
          <ReactSearchAutocomplete items={cities}
            onSelect={city => {
              selectCity(city)
            }}

            inputDebounce={200}

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
        <CurrentTemperature weatherIconId={weather.weatherIconId} temperature={weather.temperature.toFixed(1)} sunny="Mostly Sunny" />
      </div>

      <div className="current-stats">
        <CurrentStats uvIndex={weather.uvIndex} humidity={weather.humidity} windSpeed={weather.windSpeed} feelsLike={weather.feelsLike.toFixed(1)} sunrise={formatDate(weather.sunriseTime)} sunset={formatDate(weather.sunsetTime)} />
      </div>

      <div className="weather-by-hour">
        <h2 className="weather-by-hour__heading">Today's weather</h2>
        <div className="weather-by-hour__container">
          {
            weather.hourlyWeather.map(item => {
              return <WeatherByHour temperatureInCelsius={item.temperature.toFixed(1)} hour={formatDate(item.date)} weatherIconId={weather.weatherIconId}></WeatherByHour>
            })
          }
        </div>
      </div>
      <div className="next-5-days">
        <h2 className="next-5-days__heading">Next 5 days</h2>
        <div className="next-5-days__container">
          {
          weather.dailyWeather.map(item => {
            return <Next5Days date={item.date} day={item.dayOfTheWeek} weatherIconId={weather.weatherIconId} temperature={item.temperature.toFixed(1)} uvIndex={item.uvIndex.toFixed(0)} feelsLike={item.feelsLike.toFixed(0)} windSpeed={item.windSpeed} />
          })
         }
        </div>
      </div>

    </main>
  );
}

export default App;
