import { useEffect, useState } from 'react'
import { citiesAPI } from '../utils/baseURL'

const useCities = () => {
    const [fetchedData, setFetchedData] = useState([])
    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await fetch(citiesAPI)
                if (!response.ok) {
                    console.log('Failed to fetch data')
                }
                const data = await response.json()
                setFetchedData(data.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchCities()
    }, [])

    return { fetchedData, setFetchedData }
}

export default useCities
