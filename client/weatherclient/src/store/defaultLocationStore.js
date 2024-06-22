import { create } from 'zustand'
import { getLocalStorage, setLocalStorage } from '../utils/storage';

export const useDefaultLocationStore = create((set) => ({
  defaultLocation: getLocalStorage('defaultLocation') || null,
  lastLocation: getLocalStorage('lastLocation') || null,
  setDefaultLocation: (location) => {
    set({ defaultLocation: location });
    setLocalStorage('defaultLocation', location);
  },
  setLastLocation: (location) => {
    set({ lastLocation: location });
    setLocalStorage('lastLocation', location);
  },
  initializeLocations: () => {
    const defaultLocation = getLocalStorage('defaultLocation') || null;
    const lastLocation = getLocalStorage('lastLocation') || null;
    set({ defaultLocation, lastLocation });
  }
}))