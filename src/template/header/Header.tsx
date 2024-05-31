import clsx from "clsx";
import { memo } from "react";
import { useResize } from "template/resize/hook/useResize";
import { Button } from "../../ds/button/Button";
import { HeaderDrawerButton } from "./component/HeaderDrawerButton";
import { HeaderDropDrown } from "./component/HeaderDropDrown";
import { HeaderTitle } from "./component/HeaderTitle";

export interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = memo(() => {
  const { large } = useResize();

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800">
      <nav
        className={clsx(
          "shadow-md border-gray-200 px-0 lg:px-6 py-0 dark:shadow-slate-900",
          large && "ml-80"
        )}
      >
        <div className="flex justify-between items-center mx-auto max-w-screen-lg whitespace-nowrap">
          <div className="flex items-center pl-1 m-2 gap-2 truncate">
            <HeaderDrawerButton />
            <HeaderTitle />
          </div>
          <div className="flex items-center m-2 lg:order-2 gap-2">
            <Button url="/auth/signup" text="AUTH:SIGNUP" />
            <Button url="/auth/signin" text="AUTH:SIGNIN" type="primary" />
            <HeaderDropDrown />
          </div>
        </div>
      </nav>
    </header>
  );
});

export default Header;
