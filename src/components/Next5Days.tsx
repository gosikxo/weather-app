type WeatherType = 'mostly-sunny' | 'sunny';

function WeatherTypeIcon(props:{weatherType: WeatherType}) {
  if (props.weatherType === "mostly-sunny") {
        return  <img src="icons/mostly-sunny.svg" alt="Mostly sunny" />
  }
  return  <img src="icons/sunny.svg" alt="Sunny" />;
  
}

export default function Next5Days(props: {date:string, day: string, temperatureInCelsius: number, chanceOfRain: number}) {
    return (
        <><div className="next-5-days__row">

            <div className="next-5-days__date">
                {props.day}
                <div className="next-5-days__label">{props.date}</div>
            </div>

            <div className="next-5-days__low">
                {props.temperatureInCelsius}&deg;
                <div className="next-5-days__label">Low</div>
            </div>

            <div className="next-5-days__high">
                {props.temperatureInCelsius}&deg;
                <div className="next-5-days__label">High</div>
            </div>

            <div className="next-5-days__icon">
                <img src="icons/sunny.svg" alt="Sunny" />
            </div>

            <div className="next-5-days__rain">
                {props.chanceOfRain}%
                <div className="next-5-days__label">Rain</div>
            </div>

            <div className="next-5-days__wind">
                12mph
                <div className="next-5-days__label">Wind</div>
            </div>

        </div><div className="next-5-days__row">

                <div className="next-5-days__date">
                    {props.day}
                    <div className="next-5-days__label">{props.date}</div>
                </div>

                <div className="next-5-days__low">
                    {props.temperatureInCelsius}&deg;
                    <div className="next-5-days__label">Low</div>
                </div>

                <div className="next-5-days__high">
                  {props.temperatureInCelsius}&deg;
                    <div className="next-5-days__label">High</div>
                </div>

                <div className="next-5-days__icon">
                    <img src="icons/mostly-sunny.svg" alt="Mostly sunny" />
                </div>

                <div className="next-5-days__rain">
                    3%
                    <div className="next-5-days__label">Rain</div>
                </div>

                <div className="next-5-days__wind">
                    7mph
                    <div className="next-5-days__label">Wind</div>
                </div>

            </div><div className="next-5-days__row">

                <div className="next-5-days__date">
                    {props.day}
                    <div className="next-5-days__label">{props.date}</div>
                </div>

                <div className="next-5-days__low">
                    {props.temperatureInCelsius}&deg;
                    <div className="next-5-days__label">Low</div>
                </div>

                <div className="next-5-days__high">
                    {props.temperatureInCelsius}&deg;
                    <div className="next-5-days__label">High</div>
                </div>

                <div className="next-5-days__icon">
                    <img src="icons/mostly-sunny.svg" alt="Mostly sunny" />
                </div>

                <div className="next-5-days__rain">
                    75%
                    <div className="next-5-days__label">Rain</div>
                </div>

                <div className="next-5-days__wind">
                    11mph
                    <div className="next-5-days__label">Wind</div>
                </div>

            </div><div className="next-5-days__row">

                <div className="next-5-days__date">
                    {props.day}
                    <div className="next-5-days__label">{props.date}</div>
                </div>

                <div className="next-5-days__low">
                    {props.temperatureInCelsius}&deg;
                    <div className="next-5-days__label">Low</div>
                </div>

                <div className="next-5-days__high">
                    {props.temperatureInCelsius}&deg;
                    <div className="next-5-days__label">High</div>
                </div>

                <div className="next-5-days__icon">
                    <img src="icons/sunny.svg" alt="Sunny" />
                </div>

                <div className="next-5-days__rain">
                    2%
                    <div className="next-5-days__label">Rain</div>
                </div>

                <div className="next-5-days__wind">
                    8mph
                    <div className="next-5-days__label">Wind</div>
                </div>

            </div><div className="next-5-days__row">

                <div className="next-5-days__date">
                    {props.day}
                    <div className="next-5-days__label">{props.date}</div>
                </div>

                <div className="next-5-days__low">
                    {props.temperatureInCelsius}&deg;
                    <div className="next-5-days__label">Low</div>
                </div>

                <div className="next-5-days__high">
                    {props.temperatureInCelsius}&deg;
                    <div className="next-5-days__label">High</div>
                </div>

                <div className="next-5-days__icon">
                    <img src="icons/mostly-sunny.svg" alt="Mostly sunny" />
                </div>

                <div className="next-5-days__rain">
                    0%
                    <div className="next-5-days__label">Rain</div>
                </div>

                <div className="next-5-days__wind">
                    12mph
                    <div className="next-5-days__label">Wind</div>
                </div>
            </div></>
    )
}