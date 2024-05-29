import { t } from "i18next";
import { MouseEvent, PropsWithChildren, memo, useCallback } from "react";
import { Translate } from "../../i18n/component/Translate";
import { useRouterContext } from "../../router/context/RouterContext";

export interface ILinkProps extends PropsWithChildren {
  href?: string;
  text?: string;
}

export const Link: React.FC<ILinkProps> = memo(
  ({ href = "/", text, children }) => {
    const navigate = useRouterContext();

    const handleClick = useCallback(
      (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        event.stopPropagation();
        navigate?.(href);
      },
      [navigate, href]
    );

    return (
      <a
        href={href}
        title={t(text!)}
        className="flex items-center dark:text-white truncate"
        onClick={handleClick}
      >
        <Translate i18nKey={text} />
        {children}
      </a>
    );
  }
);
