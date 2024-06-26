import { create } from 'zustand';
import { getLocalStorage, setLocalStorage } from '../utils/storage';

const useLocationStore = create((set) => ({
  locations: [],
  defaultLocation: getLocalStorage('defaultLocation') || null,
  lastLocation: getLocalStorage('lastLocation') || null,
  currentLocation: getLocalStorage('currentLocation') || null,
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
  setDefaultLocation: (location) => {
    set({ defaultLocation: location });
    setLocalStorage('defaultLocation', location);
  },
  setLastLocation: (location) => {
    set({ lastLocation: location });
    setLocalStorage('lastLocation', location);
  },
  setCurrentLocation: (location) => {
    set({currentLocation: location})
    setLocalStorage('currentLocation', location)
  },
  clearDefaultLocation: () => {
    localStorage.removeItem('defaultLocation');
    set({defaultLocation: null})
  },
  clearCurrentLocation: () => {
    localStorage.removeItem('currentLocation');
    set({currentLocation: null})
  },
  initializeLocations: () => {
    const storedLocations = getLocalStorage('locations') || [];
    const defaultLocation = getLocalStorage('defaultLocation') || null;
    const lastLocation = getLocalStorage('lastLocation') || null;
    set({ defaultLocation, lastLocation });
    set({ locations: storedLocations });
  },
}));

export default useLocationStore;
