import { WeatherIcon } from "./WeatherIcon";

export default function CurrentTemperature(props: {weatherIconId: string, temperature: string, sunny: string}) {
    return (
      <>
      <div className="current-temperature__icon-container">
        <WeatherIcon iconId={props.weatherIconId} size={140}/>
      </div>
      <div className="current-temperature__content-container">
        <div className="current-temperature__value">{props.temperature}&deg;</div>
        <div className="current-temperature__summary">{props.sunny}</div>
      </div>
      </>
    )
}