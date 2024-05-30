import { Card } from "ds/card/Card";
import { Drawer } from "ds/drawer/Drawer";
import { useDrawer } from "ds/drawer/hook/useDrawer";
import { memo, useEffect } from "react";
import { useResize } from "template/resize/hook/useResize";

export interface IHeaderDrawerProps {}

export const HeaderDrawer: React.FC<IHeaderDrawerProps> = memo(() => {
  const { open, handleOpen } = useDrawer();
  const { large } = useResize();

  useEffect(() => {
    handleOpen(large)();
  }, [large, handleOpen]);

  return (
    <Drawer isOpen={open} setIsOpen={handleOpen} force={large}>
      <Card />
    </Drawer>
  );
});
