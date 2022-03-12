import { WeatherIcon } from "./WeatherIcon";

export default function Next5Days(props: {date:string, day: string, temperature: string, uvIndex: string, feelsLike: string, weatherIconId: string, windSpeed: number}) {
    return (
        <><div className="next-5-days__row">

            <div className="next-5-days__date">
                {props.day}
                <div className="next-5-days__label">{props.date}</div>
            </div>

            <div className="next-5-days__icon">
                 <WeatherIcon iconId={props.weatherIconId} size={80}/>
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
                {props.windSpeed} m/s
                <div className="next-5-days__label">Wind</div>
            </div>

        </div></>
    )
}