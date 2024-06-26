import React, { useEffect, useRef, useState } from 'react'
import { IoClose } from "react-icons/io5"
import { useSearchStore } from '../store/searchStore'
import useCities from '../hooks/useCities'
import useRetrieveForecast from '../hooks/useRetrieveForecast'
import { useForecastStore } from '../store/forecastStore'
import useLocationStore from '../store/locationStore'
import ModalScreenHeader from '../components/ModalScreenHeader'

const LocationSearch = () => {
    const {setLastLocation} = useLocationStore()
    const { setForecast } = useForecastStore()
    const setSearchOpen = useSearchStore((state) => state.toggleSearch)
    const { fetchedData } = useCities()
    const { fetchForecastByCity } = useRetrieveForecast()
    const inputRef = useRef()
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
        fetchForecastByCity(cityName, setForecast)
        setLastLocation(cityName)
        setSearchOpen()
    }
    const handleClearInput = () => {
        setQuery('')
        setSuggestions([])
        inputRef.current.focus()
    }
    useEffect(() => {
        inputRef.current.focus()
    },[])
    return (
        <div className='modal-screen'>
            <div className='flex flex-col'>
                <ModalScreenHeader testID="search-close-btn" title="Search locations" action={setSearchOpen}/>
                <div className='flex relative'>
                    <input 
                    type='text'
                    className='w-full p-2 lg:p-3 bg-transparent border border-slate-700 rounded-md text-white lg:text-lg' 
                    placeholder='Search by city name...'
                    value={query}
                    ref={inputRef}
                    onChange={handleInputChange}
                    />
                    {query && <div className='center-elements h-full absolute right-0 top-0 px-2'> <button data-testid="clear-input-btn" onClick={handleClearInput} className='text-white'><IoClose className='text-xl lg:text-2xl'/></button></div>}
                </div>
            </div>
            {suggestions.length > 0 && (
                <ul className='text-white mt-2 bg-slate-800 rounded-md lg:text-lg'>
                    {suggestions.map((suggestion, index) => (
                        <li key={index} className='p-3 rounded-md hover:bg-slate-900 cursor-pointer' onClick={() => handleSuggestionClick(suggestion.city)}>
                            {suggestion.city}, {suggestion.country}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LocationSearch;
