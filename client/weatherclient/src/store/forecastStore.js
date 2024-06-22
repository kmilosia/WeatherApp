import { create } from 'zustand'

export const useForecastStore = create((set) => ({
  forecast: {},
  dateString: '',
  setForecast: (newForecast) => set((state) => ({
    forecast: newForecast,
    dateString: newForecast?.location?.localtime || state.dateString,
  })),
}));