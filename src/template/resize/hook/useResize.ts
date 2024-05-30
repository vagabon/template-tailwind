import { useShallow } from "zustand/react/shallow";
import { useResizeStore } from "../store/useResizeStore";

export const useResize = () => {
  const large = useResizeStore(useShallow((state) => state.large));
  const setLarge = useResizeStore((state) => state.setLarge);

  return { large, setLarge };
};
