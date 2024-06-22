import { create } from 'zustand'

export const useSettingsStore = create((set) => ({
  settingsOpen: false,
  units: localStorage.getItem('units') || 'Metric',
  toggleSettings: () => set((state) => ({settingsOpen: !state.settingsOpen})),
  changeUnits: (newUnits) => {
    set({ units: newUnits })
    localStorage.setItem('units', newUnits)
  }
}))