type WeatherType = 'mostly-sunny' | 'sunny';

function WeatherTypeIcon(props:{weatherType: WeatherType}) {
  if (props.weatherType === "mostly-sunny") {
        return  <img src="icons/mostly-sunny.svg" className="current-temperature__icon" alt="Mostly sunny" />
  }
  return  <img src="icons/sunny.svg" alt="Sunny" />;
  
}

export default function CurrentTemperature(props: {weatherType: WeatherType, temperature: string, sunny: string}) {
    return (
      <>
      <div className="current-temperature__icon-container">
        <WeatherTypeIcon weatherType={props.weatherType}/>
      </div>
      <div className="current-temperature__content-container">
        <div className="current-temperature__value">{props.temperature}&deg;</div>
        <div className="current-temperature__summary">{props.sunny}</div>
      </div>
      </>
    )
}