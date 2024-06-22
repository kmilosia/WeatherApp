import {create} from 'zustand';

const useLocationStore = create((set) => ({
    locations: [],
    addLocation: (location) => set((state) => ({
        locations: [...state.locations, location]
    })),
    removeLocation: (location) => set((state) => ({
        locations: state.locations.filter(loc => loc !== location)
    })),
    clearLocations: () => set({ locations: [] }),
    initializeLocations: () => {
        const decodedCookie = decodeURIComponent(document.cookie)
        const cookieArray = decodedCookie.split(';')
        const locations = cookieArray.map(cookie => cookie.trim().split('=')[0])
        set({ locations })
    }
}))

export default useLocationStore;
