import { create } from "zustand";

const initialState = {
  colorActive: {
    talla: [],
    tallaActive: {},
    colorName: "",
    colorCode: "",
    images: [],
    detalles: [],
    price: 0,
    title: "",
  },
};

export const useStore = create((set) => ({
  ...initialState,
  setColorActive: (value) => set((state) => ({ ...state, colorActive: value })),
}));
