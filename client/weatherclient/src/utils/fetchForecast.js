import { weatherAPI } from "./baseURL"

export const fetchForecastByCity = async (cityName, setForecast) => {
    try {
        const response = await fetch(`${weatherAPI}&q=${cityName}`)
        if (!response.ok) {
            console.log('Failed to fetch weather forecast')
        }
        const data = await response.json()
        setForecast(data)
    } catch (error) {
        console.error(error)
    }
}
export const fetchForecastByCoords = async (location,setForecast) => {
    try {
        const { latitude, longitude } = location;
        const response = await fetch(`${weatherAPI}&q=${latitude},${longitude}`)
        if (!response.ok) {
            console.log('Failed to fetch weather forecast')
        }
        const data = await response.json()
        setForecast(data)
    } catch (error) {
        console.error(error)
    }
}