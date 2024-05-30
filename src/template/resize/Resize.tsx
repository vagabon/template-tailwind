import { useWindowSize } from "hook/useWindowSize";
import { memo, useEffect } from "react";
import { useResize } from "./hook/useResize";
import { LARGE } from "./store/useResizeStore";

export interface IResizeProps {}

export const Resize: React.FC<IResizeProps> = memo(() => {
  const { setLarge } = useResize();
  const { width } = useWindowSize();

  useEffect(() => {
    setLarge(width > LARGE);
  }, [setLarge, width]);

  return <></>;
});
