import React, { useState } from 'react'
import { IoClose } from "react-icons/io5"
import { useSearchStore } from '../store/searchStore'
import useCities from '../hooks/useCities'
import useRetrieveForecast from '../hooks/useRetrieveForecast'
import { useMenuStore } from '../store/menuStore'
import { useForecastStore } from '../store/forecastStore'
import useLocationStore from '../store/locationStore'
import ViewButton from '../components/ViewButton'

const LocationSearch = () => {
    const {setLastLocation} = useLocationStore()
    const { setForecast } = useForecastStore()
    const setSearchOpen = useSearchStore((state) => state.toggleSearch)
    const setMenu = useMenuStore((state) => state.toggleMenu)
    const { fetchedData } = useCities()
    const { fetchForecastByCity } = useRetrieveForecast()
    const [query, setQuery] = useState('')
    const [suggestions, setSuggestions] = useState([])

    const handleInputChange = (event) => {
        const inputQuery = event.target.value.toLowerCase()
        setQuery(inputQuery)

        if (inputQuery.length < 3) {
            setSuggestions([])
            return
        }

        const matchedCities = fetchedData.flatMap(country =>
            country.cities
                .filter(city => city.toLowerCase().includes(inputQuery))
                .map(city => ({ city, country: country.country }))
        )
        setSuggestions(matchedCities)
    }

    const handleSuggestionClick = (cityName) => {
        setMenu()
        fetchForecastByCity(cityName, setForecast)
        setLastLocation(cityName)
        setSearchOpen()
    }

    return (
        <div className='absolute top-0 left-0 w-full h-full bg-slate-950 flex flex-col p-8'>
            <div className='grid-cols-[1fr_auto] grid items-center gap-2'>
            <input 
                className='w-full p-2 bg-transparent border border-slate-700 rounded-md text-white' 
                placeholder='Search by city name'
                value={query}
                onChange={handleInputChange}
            />
            <ViewButton icon={IoClose} action={setSearchOpen} />
            </div>
            {suggestions.length > 0 && (
                <ul className='text-white mt-2 bg-slate-700'>
                    {suggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            className='p-3 hover:bg-slate-800 cursor-pointer'
                            onClick={() => handleSuggestionClick(suggestion.city)}
                        >
                            {suggestion.city}, {suggestion.country}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LocationSearch;