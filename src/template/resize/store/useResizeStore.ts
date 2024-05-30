import { create } from "zustand";

export const LARGE = 1024;

export interface IResizeStoreProps {
  large: boolean;
  setLarge: (large: boolean) => void;
}

export const useResizeStore = create<IResizeStoreProps>((set) => ({
  large: window.innerWidth > LARGE,
  setLarge: (large) =>
    set((state) => ({
      ...state,
      large,
    })),
}));
