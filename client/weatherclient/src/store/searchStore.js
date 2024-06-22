import { create } from 'zustand'

export const useSearchStore = create((set) => ({
  searchOpen: false,
  toggleSearch: () => set((state) => ({searchOpen: !state.searchOpen}))
}))