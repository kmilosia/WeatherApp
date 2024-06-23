import { weatherAPI } from '../utils/baseURL';

const useRetrieveForecast = () => {
    const fetchForecastByCity = async (cityName, setForecast) => {
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
    const fetchForecastByCoords = async (location,setForecast) => {
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
    
    return { fetchForecastByCity, fetchForecastByCoords }
}

export default useRetrieveForecast;
