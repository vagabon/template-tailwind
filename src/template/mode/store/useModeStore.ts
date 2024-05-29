import { create } from "zustand";
import { ModeType } from "../hook/useMode";

export interface IModeSToreProps {
  mode: ModeType;
  setMode: (mode: ModeType) => void;
}

const getDefaultMode = () => {
  let mode = localStorage.getItem("mode") as ModeType;
  if (!mode) {
    mode = window.matchMedia?.("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  mode === "dark" && document.body.classList.add("dark");
  return mode;
};

export const useModeStore = create<IModeSToreProps>((set) => ({
  mode: getDefaultMode(),
  setMode: (newMode) =>
    set((state) => ({
      ...state,
      mode: newMode,
    })),
}));
