//@ts-ignore
import { WiDaySunny, WiDayCloudy, WiCloud, WiCloudy, WiRainWind, WiDayRainWind, WiThunderstorm, WiSnowWind, WiFog } from "weather-icons-react"

const ICON_COLOR = "#fff";

export function WeatherIcon({ iconId, size }: { iconId: string, size: number }) {
    switch (iconId) {
        default:
        case "01d":
            return <WiDaySunny size={size} color={ICON_COLOR} />
        case "02d":
            return <WiDayCloudy size={size} color={ICON_COLOR} />
        case "03d":
            return <WiCloud size={size} color={ICON_COLOR} />
        case "04d":
            return <WiCloudy size={size} color={ICON_COLOR} />
        case "09d":
            return <WiRainWind size={size} color={ICON_COLOR} />
        case "10d":
            return <WiDayRainWind size={size} color={ICON_COLOR} />
        case "11d":
            return <WiThunderstorm size={size} color={ICON_COLOR} />
        case "13d":
            return <WiSnowWind size={size} color={ICON_COLOR} />
        case "50d":
            return <WiFog size={size} color={ICON_COLOR} />
        case "01n":
            return <WiDaySunny size={size} color={ICON_COLOR} />
        case "02n":
            return <WiDayCloudy size={size} color={ICON_COLOR} />
        case "03n":
            return <WiCloud size={size} color={ICON_COLOR} />
        case "04n":
            return <WiCloudy size={size} color={ICON_COLOR} />
        case "09n":
            return <WiRainWind size={size} color={ICON_COLOR} />
        case "10n":
            return <WiDayRainWind size={size} color={ICON_COLOR} />
        case "11n":
            return <WiThunderstorm size={size} color={ICON_COLOR} />
        case "13n":
            return <WiSnowWind size={size} color={ICON_COLOR} />
        case "50n":
            return <WiFog size={size} color={ICON_COLOR} />
    }
}
