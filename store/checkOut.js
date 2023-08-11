import { create } from "zustand";

const initialState = {
  pasarela: {
    envios: ["nacionales", "delivery", "pick up"],
    metodosDePago: {
      dolares: ["paypal", "efectivo", "zelle", "binance"],
      bolivares: ["efectivo", "pagoMobil", "transferencia"],
    },
  },
  checkOutPasarela: {
    metodoEnvio: {
      tipoEnvio: "",
      datosEnvio: {
        cedula: "",
        numeroContacto: "",
        nombreYApellido: "",
        ubicacion: "",
        agenciaDeEnvios: "",
      },
    },

    metodoPago: {
      moneda: "",
      metodoPago: "",
    },
  },
};

export const useStoreCheckOut = create((set) => ({
  ...initialState,
  setCheckOutPasarela: (value) => set((state) => ({ ...state, checkOutPasarela: value })),
}));
