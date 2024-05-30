import { create } from "zustand";

export interface IDrawerStoreProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const useDrawerStore = create<IDrawerStoreProps>((set) => ({
  open: window.innerWidth > 1024,
  setOpen: (open) =>
    set((state) => ({
      ...state,
      open,
    })),
}));
