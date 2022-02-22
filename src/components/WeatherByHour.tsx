type WeatherType = 'mostly-sunny' | 'sunny';

function WeatherTypeIcon(props:{weatherType: WeatherType}) {
  if (props.weatherType === "mostly-sunny") {
        return  <img src="icons/mostly-sunny.svg" alt="Mostly sunny" />
  }
  return  <img src="icons/sunny.svg" alt="Sunny" />;
  
}

export default function WeatherByHour(props: {hour:string, temperatureInCelsius: number, weatherType: WeatherType}) {
    return (
        <div className="weather-by-hour__item">
          <div className="weather-by-hour__hour">{props.hour}</div>
          <WeatherTypeIcon weatherType={props.weatherType}/>
          <div>{props.temperatureInCelsius}&deg;</div>
        </div>
    )
}