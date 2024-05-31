import clsx from "clsx";
import { useClickOutside } from "hook/useClickoutside";
import React, {
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export interface IDrawerProps extends PropsWithChildren {
  force?: boolean;
  isOpen: boolean;
  setIsOpen: (open: boolean) => () => void;
}

export const Drawer: React.FC<IDrawerProps> = ({
  children,
  isOpen,
  force,
  setIsOpen,
}) => {
  const { ref } = useClickOutside(
    isOpen,
    !force ? setIsOpen(false) : undefined,
    "menu-button"
  );
  const [drawerClassName, setDrawerClassName] = useState("");
  const timeout = useRef<number | null>(null);

  const mainClassName = useMemo(() => {
    return force ? "max-w-xs" : "";
  }, [force]);

  useEffect(() => {
    timeout.current && clearTimeout(timeout.current);
    if (!isOpen) {
      timeout.current = setTimeout(() => {
        setDrawerClassName("");
      }, 500);
    } else {
      setDrawerClassName("fixed");
    }
  }, [isOpen]);

  return (
    <main
      className={clsx(
        "overflow-hidden z-10 bg-gray-900 bg-opacity-50 inset-0 transform ease-in-out",
        isOpen
          ? " transition opacity-100 duration-500 "
          : " transition-left delay-500 opacity-0",
        drawerClassName,
        mainClassName
      )}
    >
      <section
        ref={ref}
        className={
          "w-screen max-w-xs absolute bg-white dark:bg-slate-900 h-full shadow-xl delay-400 duration-500 ease-in-out transition-left transform " +
          (isOpen ? "left-0" : "-left-80")
        }
      >
        <article className="relative w-screen max-w-xs pb-10 flex flex-col space-y-6 h-full px-2 ">
          <header className="p-4 font-bold text-lg">Header</header>
          {children}
        </article>
      </section>
    </main>
  );
};
