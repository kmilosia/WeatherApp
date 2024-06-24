import { create } from 'zustand';
import { determineBackgroundURL } from '../utils/determineBackground';

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
