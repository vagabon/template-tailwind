import { useCallback } from "react";
import { useShallow } from "zustand/react/shallow";
import { useModeStore } from "../store/useModeStore";

export type ModeType = "light" | "dark";

export const useMode = () => {
  const mode = useModeStore(useShallow((state) => state.mode));
  const setMode = useModeStore((state) => state.setMode);

  const updateMode = useCallback(
    (mode: ModeType) => {
      if (mode === "light") {
        document.body.classList.remove("dark");
      } else {
        document.body.classList.add("dark");
      }
      setMode(mode);
      localStorage.setItem("mode", mode);
    },
    [setMode]
  );

  const switchMode = useCallback(
    (mode: ModeType) => () => {
      const newMode = mode === "light" ? "dark" : "light";
      updateMode(newMode);
    },
    [updateMode]
  );

  return { mode, switchMode };
};
