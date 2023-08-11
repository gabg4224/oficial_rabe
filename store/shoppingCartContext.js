
import { create } from "zustand";

const initialState = {
  shoppingCart: {
spinner:false
  }
};

export const useStore = create((set) => ({
  ...initialState,
  setColorActive: (value) => set((state) => ({ ...state, shoppingCart: value })),
}));
