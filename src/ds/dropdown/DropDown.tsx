import clsx from "clsx";
import React, { memo, useCallback, useState } from "react";

export interface IDropDownProps {
  isRelative?: boolean;
  content: { [x: string]: React.JSX.Element };
}

export const DropDown: React.FC<IDropDownProps> = memo(
  ({ isRelative = true, content }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = useCallback(
      (open: boolean) => () => {
        setOpen(!open);
      },
      []
    );

    return (
      <div className={clsx("inline-block text-left", isRelative && "relative")}>
        <div>
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={handleOpen(open)}
          >
            <svg
              className="-mr-1 h-5 w-5 text-gray-400"
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
          </button>
        </div>

        <div
          className={clsx(
            "right-1 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-900 dark:text-white",
            isRelative ? "absolute" : "fixed",
            !open && "opacity-0 transition delay-150",
            open && "opacity-1 transition delay-150"
          )}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="" role="none">
            {Object.entries(content).map(([key, value]) => (
              <div
                key={key}
                className="flex justify-center hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
);
