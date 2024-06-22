import { create } from 'zustand'

export const useForecastStore = create((set) => ({
  forecast: {},
  setForecast: (newForecast) => set(() => ({forecast: newForecast}))
}))