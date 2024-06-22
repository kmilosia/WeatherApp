import { create } from 'zustand'

export const useMenuStore = create((set) => ({
  menuOpen: false,
  toggleMenu: () => set((state) => ({menuOpen: !state.menuOpen}))
}))