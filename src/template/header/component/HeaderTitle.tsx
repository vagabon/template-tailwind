import { memo } from "react";
import { Link } from "../../../ds/link/Link";

export const HeaderTitle: React.FC = memo(() => {
  return (
    <Link href="/">
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="mr-3 h-6 sm:h-9"
        alt="Flowbite Logo"
      />
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white truncate">
        Template Tailwind
      </span>
    </Link>
  );
});
