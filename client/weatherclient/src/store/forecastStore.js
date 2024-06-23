import { create } from 'zustand';
import { isDaytime } from '../utils/isDayTime';

const determineBackgroundURL = (conditionName, dateTime) => {
  const isDay = isDaytime(dateTime)
  const condition = conditionName ? conditionName.toLowerCase().trim() : ''

  switch (true) {
    case isDay && condition.includes('clear'):
      return {
        backgroundURL: `https://images.pexels.com/photos/316137/pexels-photo-316137.jpeg`,
        backgroundText: 'Photo by Pixabay: https://www.pexels.com/photo/skyscrapers-in-city-against-clear-sky-316137/',
      };
    case !isDay && condition.includes('clear'):
      return {
        backgroundURL: `https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg`,
        backgroundText: 'Photo by Pixabay: https://www.pexels.com/photo/high-rise-buildings-during-night-time-photo-219692/',
      };
    case isDay && condition.includes('sun'):
      return{
        backgroundURL: `https://images.pexels.com/photos/1152359/pexels-photo-1152359.jpeg`,
        backgroundText: 'Photo by MarcTutorials: https://www.pexels.com/photo/palm-trees-1152359/'
      };
      case isDay && condition.includes('heavy rain'):
        return{
          backgroundURL: `https://images.pexels.com/photos/763398/pexels-photo-763398.jpeg`,
          backgroundText: 'Photo by Genaro Servín: https://www.pexels.com/photo/person-riding-a-bicycle-during-rainy-day-763398/'
      };
      case !isDay && condition.includes('rain'):
        return{
          backgroundURL: `https://images.pexels.com/photos/1152359/pexels-photo-1152359.jpeg`,
          backgroundText: 'Photo by Mark Plötz: https://www.pexels.com/photo/selective-photography-of-glass-window-with-drops-of-water-during-nighttime-761680/'
      };
      case isDay && (condition.includes('rain') || condition.includes('mist') || condition.includes('shower')):
        return{
          backgroundURL: `https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg`,
          backgroundText: 'Photo by Kaique Rocha: https://www.pexels.com/photo/water-dew-in-clear-glass-panel-125510/'
      };
      case isDay && condition.includes('thunder'):
        return{
          backgroundURL: `https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg`,
          backgroundText: 'Photo by Andre Furtado: https://www.pexels.com/photo/lightning-and-gray-clouds-1162251/'
      };
      case !isDay && condition.includes('thunder'):
        return{
          backgroundURL: `https://images.pexels.com/photos/2684011/pexels-photo-2684011.jpeg`,
          backgroundText: 'Photo by Amol Mande: https://www.pexels.com/photo/scenic-view-of-thunderstorm-2684011/'
      };
      case isDay && (condition.includes('mostly cloudy') || condition.includes('overcast')):
        return{
          backgroundURL: `https://images.pexels.com/photos/1154510/pexels-photo-1154510.jpeg`,
          backgroundText: 'Photo by Josh Sorenson: https://www.pexels.com/photo/body-of-water-1154510/'
      };
      case isDay && condition.includes('cloud'):
        return{
          backgroundURL: `https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg`,
          backgroundText: 'Photo by Pixabay: https://www.pexels.com/photo/blue-skies-53594/'
      };
      case !isDay && condition.includes('cloud'):
        return{
          backgroundURL: `https://images.pexels.com/photos/239107/pexels-photo-239107.jpeg`,
          backgroundText: 'Photo by Joonas kääriäinen: https://www.pexels.com/photo/clouds-under-full-moon-239107/'
      };
      case isDay && condition.includes('snow'):
        return{
          backgroundURL: `https://images.pexels.com/photos/796563/pexels-photo-796563.jpeg`,
          backgroundText: 'Photo by Dominika Gregušová: https://www.pexels.com/photo/houses-and-pine-tree-796563/'
      };
      case !isDay && condition.includes('snow'):
        return{
          backgroundURL: `https://images.pexels.com/photos/730256/pexels-photo-730256.jpeg`,
          backgroundText: 'Photo by Lisa Fotios: https://www.pexels.com/photo/rain-of-snow-in-town-painting-730256/'
      };
      case isDay && (condition.includes('fog') || condition.includes('mist')):
        return{
          backgroundURL: `https://images.pexels.com/photos/1529881/pexels-photo-1529881.jpeg`,
          backgroundText: 'Photo by Dương Nhân: https://www.pexels.com/photo/grayscale-photography-of-trees-1529881/'
      };
      case !isDay && (condition.includes('fog') || condition.includes('mist')):
        return{
          backgroundURL: `https://images.pexels.com/photos/9920643/pexels-photo-9920643.jpeg`,
          backgroundText: 'Photo by Elias Tigiser: https://www.pexels.com/photo/road-and-street-lights-at-night-9920643/'
      };
   
    default:
      return {
        backgroundURL: isDay ? `https://images.pexels.com/photos/1292843/pexels-photo-1292843.jpeg` : `https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg`,
        backgroundText: isDay ? `Photo by Luis  Ruiz: https://www.pexels.com/photo/city-buildings-near-sea-under-blue-sky-1292843/` : 'Photo by Pixabay: https://www.pexels.com/photo/high-rise-buildings-during-night-time-photo-219692/',
      };
  }
}

export const useForecastStore = create((set) => ({
  forecast: {},
  dateString: '',
  backgroundURL: '',
  backgroundText: '',
  setForecast: (newForecast) =>
    set((state) => {
      const { backgroundURL, backgroundText } = determineBackgroundURL(newForecast.current.condition.text, newForecast.location.localtime);
      return {
        forecast: newForecast,
        dateString: newForecast?.location?.localtime || state.dateString,
        backgroundURL: backgroundURL,
        backgroundText: backgroundText,
      };
    }),
}));
