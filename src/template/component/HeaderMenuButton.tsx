import { memo, useState } from "react";
import Svg from "../../icon/svg/Svg";

export const HeaderMenuButton: React.FC = memo(() => {
  const [open, setOpen] = useState(false);

  return (
    <button
      data-collapse-toggle="mobile-menu-2"
      type="button"
      className="inline-flex items-center p-1 m-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="mobile-menu-2"
      aria-expanded={open}
      onClick={() => setOpen(!open)}
    >
      <span className="sr-only">Open main menu</span>
      <Svg
        className={open ? "hidden " : " "}
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
      />
      <Svg
        className={open ? " " : "hidden "}
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      />
    </button>
  );
});
