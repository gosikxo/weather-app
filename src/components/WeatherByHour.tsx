import { WeatherIcon } from "./WeatherIcon";

export default function WeatherByHour(props: {hour:string, temperatureInCelsius: string, weatherIconId: string}) {
    return (
        <div className="weather-by-hour__item">
          <div className="weather-by-hour__hour">{props.hour}</div>
              <WeatherIcon iconId={props.weatherIconId} size={60}/>
          <div>{props.temperatureInCelsius}&deg;</div>
        </div>
    )
}