import React from 'react'
import { WiRaindrops,WiStrongWind,WiCloudy,WiBarometer,WiShowers,WiDaySunny } from "react-icons/wi";
import { useForecastStore } from '../store/forecastStore';
import WeatherDetailContainer from './WeatherDetailContainer';

const WeatherDetails = () => {
    const forecast = useForecastStore((state) => state.forecast)
  return (
    <div className="grid grid-cols-3 gap-4 my-3">
            <WeatherDetailContainer icon={WiBarometer} label="Pressure" value={`${forecast.current.pressure_mb} mb`} />
            <WeatherDetailContainer icon={WiCloudy} label="Cloud" value={`${forecast.current.cloud} %`} />
            <WeatherDetailContainer icon={WiDaySunny} label="UV Index" value={forecast.current.uv} />
            <WeatherDetailContainer icon={WiRaindrops} label="Humidity" value={`${forecast.current.humidity} %`} />
            <WeatherDetailContainer icon={WiShowers} label="Precipitation" value={`${forecast.current.precip_mm} mm`} />
            <WeatherDetailContainer icon={WiStrongWind} label="Wind" value={`${forecast.current.wind_kph} km/h`} />
    </div>
  )
}

export default WeatherDetails
