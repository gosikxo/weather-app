export default function CurrentStats(props: { uvIndex: number, humidity: number, windSpeed: number, feelsLike: string, sunrise: string, sunset: string }) {
    return (
        <><div>
            <div className="current-stats__value">{props.uvIndex}</div>
            <div className="current-stats__label">UV Index</div>
            <div className="current-stats__value">{props.humidity}%</div>
            <div className="current-stats__label">Humidity</div>
        </div><div>
                <div className="current-stats__value">{props.windSpeed}m/s</div>
                <div className="current-stats__label">Wind</div>
                <div className="current-stats__value">{props.feelsLike}&deg;</div>
                <div className="current-stats__label">Feels like</div>
            </div><div>
                <div className="current-stats__value">{props.sunrise}</div>
                <div className="current-stats__label">Sunrise</div>
                <div className="current-stats__value">{props.sunset}</div>
                <div className="current-stats__label">Sunset</div>
            </div></>
    )
}