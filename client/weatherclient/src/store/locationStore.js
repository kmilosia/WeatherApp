import { create } from 'zustand';
import { getLocalStorage, setLocalStorage } from '../utils/storage';

const useLocationStore = create((set) => ({
  locations: [],
  addLocation: (location) => set((state) => {
    const updatedLocations = [...state.locations];
    if (!updatedLocations.includes(location)) {
      updatedLocations.push(location);
      setLocalStorage('locations', updatedLocations);
    }
    return { locations: updatedLocations };
  }),
  removeLocation: (location) => set((state) => {
    const updatedLocations = state.locations.filter(loc => loc !== location);
    setLocalStorage('locations', updatedLocations);
    return { locations: updatedLocations };
  }),
  clearLocations: () => set(() => {
    localStorage.removeItem('locations');
    return { locations: [] };
  }),
  initializeLocations: () => {
    const storedLocations = getLocalStorage('locations') || [];
    set({ locations: storedLocations });
  }
}));

export default useLocationStore;
