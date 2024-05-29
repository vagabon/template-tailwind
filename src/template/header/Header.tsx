import { memo } from "react";
import { Button } from "../../ds/button/Button";
import { HeaderDropDrown } from "../component/HeaderDropDrown";
import { HeaderMenuButton } from "../component/HeaderMenuButton";
import { HeaderTitle } from "../component/HeaderTitle";

export interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = memo(() => {
  return (
    <header className="sticky top-0 z-50">
      <nav className="shadow-2xl bg-white border-gray-200 px-0 lg:px-6 py-0 dark:bg-gray-800">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl truncate">
          <div className="flex items-center truncate">
            <HeaderMenuButton />
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
