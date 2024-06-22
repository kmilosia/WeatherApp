import { useEffect, useState } from 'react';
import { weatherAPI } from '../utils/baseURL';
import { useForecastStore } from '../store/forecastStore'

const useRetrieveForecast = () => {
    const { setForecast } = useForecastStore()

    const fetchForecastByCity = async (cityName) => {
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
