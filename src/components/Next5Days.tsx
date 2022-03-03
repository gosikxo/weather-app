type WeatherType = 'mostly-sunny' | 'sunny';

function WeatherTypeIcon(props:{weatherType: WeatherType}) {
  if (props.weatherType === "mostly-sunny") {
        return  <img src="icons/mostly-sunny.svg" alt="Mostly sunny" />
  }
  return  <img src="icons/sunny.svg" alt="Sunny" />;
  
}

export default function Next5Days(props: {date:string, day: string, temperatureInCelsiusLow: number, temperatureInCelsiusHigh: number, chanceOfRain: number, weatherType: WeatherType, windSpeed: number}) {
    return (
        <><div className="next-5-days__row">

            <div className="next-5-days__date">
                {props.day}
                <div className="next-5-days__label">{props.date}</div>
            </div>

            <div className="next-5-days__icon">
                <WeatherTypeIcon weatherType={props.weatherType}/>
            </div>

            <div className="next-5-days__low">
                {props.temperatureInCelsiusLow}&deg;
                <div className="next-5-days__label">Low</div>
            </div>

            <div className="next-5-days__high">
                {props.temperatureInCelsiusHigh}&deg;
                <div className="next-5-days__label">High</div>
            </div>

            <div className="next-5-days__rain">
                {props.chanceOfRain}%
                <div className="next-5-days__label">Rain</div>
            </div>

            <div className="next-5-days__wind">
                {props.windSpeed}mph
                <div className="next-5-days__label">Wind</div>
            </div>

        </div></>
    )
}