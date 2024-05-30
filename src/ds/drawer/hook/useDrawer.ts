import { useCallback } from "react";
import { useShallow } from "zustand/react/shallow";
import { useDrawerStore } from "../store/useDrawerStore";

export const useDrawer = () => {
  const open = useDrawerStore(useShallow((state) => state.open));
  const setOpen = useDrawerStore((state) => state.setOpen);

  const handleOpen = useCallback(
    (open: boolean) => () => {
      setOpen(open);
    },
    [setOpen]
  );
  return { open, handleOpen };
};
