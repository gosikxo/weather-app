type WeatherType = 'mostly-sunny' | 'sunny';

function WeatherTypeIcon(props:{weatherType: WeatherType}) {
  if (props.weatherType === "mostly-sunny") {
        return  <img src="icons/mostly-sunny.svg" alt="Mostly sunny" />
  }
  return  <img src="icons/sunny.svg" alt="Sunny" />;
  
}

export default function Next5Days(props: {date:string, day: string, temperature: string, uvIndex: string, feelsLike: string, weatherType: WeatherType, windSpeed: number}) {
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
                {props.temperature}&deg;
                <div className="next-5-days__label">Temperature</div>
            </div>

            <div className="next-5-days__high">
                {props.uvIndex}
                <div className="next-5-days__label">UV Index</div>
            </div>

            <div className="next-5-days__rain">
                {props.feelsLike}&deg;
                <div className="next-5-days__label">Feels like</div>
            </div>

            <div className="next-5-days__wind">
                {props.windSpeed}mph
                <div className="next-5-days__label">Wind</div>
            </div>

        </div></>
    )
}