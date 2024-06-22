export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorage = (key) => {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : null
}

export const checkLocalStorage = (key) => {
    return localStorage.getItem(key) !== null
}

export const getLastLocationFromLocalStorage = () => {
    const storedLocations = JSON.parse(localStorage.getItem('locations')) || []
    return storedLocations.length > 0 ? storedLocations[storedLocations.length - 1] : ''
}