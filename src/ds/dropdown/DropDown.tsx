import clsx from "clsx";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { useClickOutside } from "../../hook/useClickoutside";
import { Button } from "../button/Button";

export interface IDropDownProps {
  className?: string;
  left?: boolean;
  content: { [x: string]: React.JSX.Element };
}

export const DropDown: React.FC<IDropDownProps> = memo(
  ({ left = false, className, content }) => {
    const [open, setOpen] = useState(false);
    const [drawerClassName, setDrawerClassName] = useState("");
    const timeout = useRef<number | null>(null);

    useEffect(() => {
      timeout.current && clearTimeout(timeout.current);
      if (!open) {
        timeout.current = setTimeout(() => {
          setDrawerClassName("hidden");
        }, 150);
      } else {
        timeout.current = setTimeout(() => {
          setDrawerClassName("");
        }, 150);
        setDrawerClassName("transition delay-150");
      }
    }, [open]);

    const handleOpen = useCallback(
      (open: boolean) => () => {
        setOpen(!open);
      },
      []
    );

    const { ref } = useClickOutside(open, handleOpen(true));

    return (
      <div className={clsx("relative inline-block text-left")} ref={ref}>
        <div>
          <Button type="icon" callback={handleOpen(open)}>
            <svg
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </div>

        <div
          className={clsx(
            "absolute z-10 origin-top-right rounded-md bg-white dark:bg-slate-900 ring-2 ring-black dark:ring-slate-500 ring-opacity-5 focus:outline-none dark:text-white",
            !open && "opacity-0",
            open && "opacity-1",
            left ? "left-0" : "right-0",
            className ?? "mt-1 ",
            drawerClassName
          )}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          {Object.entries(content).map(([key, value]) => (
            <div
              key={key}
              className="flex justify-center hover:bg-slate-100 hover:rounded-md p-1 dark:hover:bg-slate-700 text-base"
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    );
  }
);
