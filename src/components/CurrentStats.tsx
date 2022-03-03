export default function CurrentStats(props: { temperatureHigh: number, temperatureLow: number, windSpeed: number, chanceOfRain: number, sunrise: string, sunset: string }) {
    return (
        <><div>
            <div className="current-stats__value">{props.temperatureHigh}&deg;</div>
            <div className="current-stats__label">High</div>
            <div className="current-stats__value">{props.temperatureLow}&deg;</div>
            <div className="current-stats__label">Low</div>
        </div><div>
                <div className="current-stats__value">{props.windSpeed}mph</div>
                <div className="current-stats__label">Wind</div>
                <div className="current-stats__value">{props.chanceOfRain}%</div>
                <div className="current-stats__label">Rain</div>
            </div><div>
                <div className="current-stats__value">{props.sunrise}</div>
                <div className="current-stats__label">Sunrise</div>
                <div className="current-stats__value">{props.sunset}</div>
                <div className="current-stats__label">Sunset</div>
            </div></>
    )
}