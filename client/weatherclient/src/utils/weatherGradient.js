export const determineWeatherGradient = (conditionName, dateTime) => {
    const isDay = isDaytime(dateTime)
    const condition = conditionName ? conditionName.toLowerCase().trim() : ''
    
    if(condition.includes('clear')){
        return isDay ? 'clear-day' : 'clear-night'
    }else if(condition.includes('snow') || condition.includes('fog') || condition.includes('mist') || condition.includes('sleet') || condition.includes('drizzle')){
        return isDay ? 'gray-day' : 'gray-night'
    }else if(condition.includes('snow')){
        return isDay ? 'snowy-day' : 'gray-night'
    }else if(condition.includes('rain') || condition.includes('thunder')){
        return isDay ? 'rainy-day' : 'gray-night'
    }else if(condition.includes('cloud')){
        return isDay ? 'cloudy-day' : 'gray-night'
    }else if(condition.includes('sun')){
        return 'sunny-day'
    }else {
        return isDay ? 'bg-blue-500' : 'bg-blue-900';
    }
}
const isDaytime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString)
    const hour = dateTime.getHours()
    return hour >= 6 && hour < 18
}