import {create} from 'zustand';

const usePopupStore = create((set) => ({
  popups: [],
  nextId: 1,
  addPopup: (message) => {
    set((state) => ({
      popups: [...state.popups, { id: state.nextId, message }],
      nextId: state.nextId + 1,
    }))
  },
  removePopup: (id) => {
    set((state) => ({ popups: state.popups.filter((popup) => popup.id !== id)}))
  },
}))

export default usePopupStore;
