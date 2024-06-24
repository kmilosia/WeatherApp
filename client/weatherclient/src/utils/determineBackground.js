import sunnyDay from '../assets/backgrounds/sunny-day.jpg'
import clearDay from '../assets/backgrounds/clear-day.jpg'
import cloudyDay from '../assets/backgrounds/cloudy-day.jpg'
import cloudyNight from '../assets/backgrounds/cloudy-night.jpg'
import foggyDay from '../assets/backgrounds/fog-day.jpg'
import foggyNight from '../assets/backgrounds/fog-night.jpg'
import overcast from '../assets/backgrounds/overcast.jpg'
import heavyRain from '../assets/backgrounds/heavy-rain.jpg'
import rainyDay from '../assets/backgrounds/rainy-day.jpg'
import rainyNight from '../assets/backgrounds/rainy-night.jpg'
import snowyDay from '../assets/backgrounds/snowy-day.jpg'
import snowyNight from '../assets/backgrounds/snowy-night.jpg'
import thunderDay from '../assets/backgrounds/thunder-day.jpg'
import thunderNight from '../assets/backgrounds/thunder-night.jpg'
import defaultDay from '../assets/backgrounds/default-day.jpg'
import defaultNight from '../assets/backgrounds/default-night.jpg'

 
export const determineBackgroundURL = (conditionName, dateTime) => {
    const isDay = isDaytime(dateTime)
    const condition = conditionName ? conditionName.toLowerCase().trim() : ''
  
    switch (true) {
      case isDay && condition.includes('clear'):
        return {
          backgroundURL: clearDay,
          backgroundText: 'Photo by Pixabay: https://www.pexels.com/photo/skyscrapers-in-city-against-clear-sky-316137/',
        };
      case !isDay && condition.includes('clear'):
        return {
          backgroundURL: defaultNight,
          backgroundText: 'Photo by Pixabay: https://www.pexels.com/photo/high-rise-buildings-during-night-time-photo-219692/',
        };
      case isDay && condition.includes('sun'):
        return{
          backgroundURL: sunnyDay,
          backgroundText: 'Photo by MarcTutorials: https://www.pexels.com/photo/palm-trees-1152359/'
        };
        case isDay && condition.includes('heavy rain'):
          return{
            backgroundURL: heavyRain,
            backgroundText: 'Photo by Genaro Servín: https://www.pexels.com/photo/person-riding-a-bicycle-during-rainy-day-763398/'
        };
        case !isDay && condition.includes('rain'):
          return{
            backgroundURL: rainyNight,
            backgroundText: 'Photo by Mark Plötz: https://www.pexels.com/photo/selective-photography-of-glass-window-with-drops-of-water-during-nighttime-761680/'
        };
        case isDay && (condition.includes('rain') || condition.includes('mist') || condition.includes('shower')):
          return{
            backgroundURL: rainyDay,
            backgroundText: 'Photo by Kaique Rocha: https://www.pexels.com/photo/water-dew-in-clear-glass-panel-125510/'
        };
        case isDay && condition.includes('thunder'):
          return{
            backgroundURL: thunderDay,
            backgroundText: 'Photo by Andre Furtado: https://www.pexels.com/photo/lightning-and-gray-clouds-1162251/'
        };
        case !isDay && condition.includes('thunder'):
          return{
            backgroundURL: thunderNight,
            backgroundText: 'Photo by Amol Mande: https://www.pexels.com/photo/scenic-view-of-thunderstorm-2684011/'
        };
        case isDay && (condition.includes('mostly cloudy') || condition.includes('overcast')):
          return{
            backgroundURL: overcast,
            backgroundText: 'Photo by Josh Sorenson: https://www.pexels.com/photo/body-of-water-1154510/'
        };
        case isDay && condition.includes('cloud'):
          return{
            backgroundURL: cloudyDay,
            backgroundText: 'Photo by Pixabay: https://www.pexels.com/photo/blue-skies-53594/'
        };
        case !isDay && condition.includes('cloud'):
          return{
            backgroundURL: cloudyNight,
            backgroundText: 'Photo by Pixabay: https://www.pexels.com/photo/top-view-photography-of-sydney-opera-house-australia-302220/'
        };
        case isDay && condition.includes('snow'):
          return{
            backgroundURL: snowyDay,
            backgroundText: 'Photo by Dominika Gregušová: https://www.pexels.com/photo/houses-and-pine-tree-796563/'
        };
        case !isDay && condition.includes('snow'):
          return{
            backgroundURL: snowyNight,
            backgroundText: 'Photo by Lisa Fotios: https://www.pexels.com/photo/rain-of-snow-in-town-painting-730256/'
        };
        case isDay && (condition.includes('fog') || condition.includes('mist')):
          return{
            backgroundURL: foggyDay,
            backgroundText: 'Photo by Dương Nhân: https://www.pexels.com/photo/grayscale-photography-of-trees-1529881/'
        };
        case !isDay && (condition.includes('fog') || condition.includes('mist')):
          return{
            backgroundURL: foggyNight,
            backgroundText: 'Photo by Elias Tigiser: https://www.pexels.com/photo/road-and-street-lights-at-night-9920643/'
        };
     
      default:
        return {
          backgroundURL: isDay ? defaultDay : defaultNight,
          backgroundText: isDay ? `Photo by Luis  Ruiz: https://www.pexels.com/photo/city-buildings-near-sea-under-blue-sky-1292843/` : 'Photo by Pixabay: https://www.pexels.com/photo/high-rise-buildings-during-night-time-photo-219692/',
        };
    }
  }

  const isDaytime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString)
    const hour = dateTime.getHours()
    return hour >= 6 && hour < 21
  }