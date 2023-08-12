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
    tipoEnvio: "nacionales",

    cedula: "",
    numeroContacto: "",
    nombreYApellido: "",
    ubicacion: "",
    agenciaDeEnvios: "MRW",

    moneda: "dolares",
    metodoPago: "paypal",
  },
};

export const useStoreCheckOut = create((set) => ({
  ...initialState,
  setCheckOutPasarela: (value) =>
    set((state) => ({ ...state, checkOutPasarela: value })),
}));

