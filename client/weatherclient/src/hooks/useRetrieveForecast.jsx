import { weatherAPI } from '../utils/baseURL';

const useRetrieveForecast = () => {
    const fetchForecastByCity = async (cityName, setForecast) => {
        try {
            const response = await fetch(`${weatherAPI}&q=${cityName}`);
            if (!response.ok) {
                console.log('Failed to fetch weather forecast');
                throw new Error('Failed to fetch weather forecast');
            }
            const data = await response.json();
            setForecast(data)
        } catch (error) {
            console.error(error);
        }
    };
    
    return { fetchForecastByCity };
};

export default useRetrieveForecast;
