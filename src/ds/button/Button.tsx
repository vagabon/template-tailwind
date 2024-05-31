import { clsx } from "clsx";
import React, {
  MouseEvent,
  PropsWithChildren,
  memo,
  useCallback,
  useMemo,
} from "react";
import { Translate } from "../../i18n/component/Translate";
import { useRouterContext } from "../../router/context/RouterContext";

const switchType = (type?: string) => {
  let className = "focus:ring-2 font-medium rounded-lg text-sm px-4 py-1.5 ";
  if (type === "icon") {
    className =
      "inline-flex items-center px-2 py-1.5 text-sm rounded-lg focus:outline-none focus:ring-2";
  }
  return className;
};

export interface IButtonProps extends PropsWithChildren {
  url?: string;
  icon?: React.JSX.Element;
  text?: string;
  type?: string;
  className?: string;
  callback?: () => void;
}

export const Button: React.FC<IButtonProps> = memo(
  ({
    url = "",
    className,
    icon,
    text,
    type = "simple",
    callback,
    children,
  }) => {
    const navigate = useRouterContext();
    const buttonClass = useMemo(() => switchType(type), [type]);

    const handleClick = useCallback(
      (event: MouseEvent<HTMLAnchorElement>) => {
        event.stopPropagation();
        event.preventDefault();
        if (url) {
          navigate?.(url);
        } else {
          callback?.();
        }
      },
      [url, navigate, callback]
    );

    return (
      <a
        href={url}
        type="button"
        className={clsx(
          buttonClass,
          className,
          "text-" + type,
          "flex items-center gap-2"
        )}
        onClick={handleClick}
      >
        {icon}
        {text && (
          <span>
            <Translate i18nKey={text} />
          </span>
        )}
        {children}
      </a>
    );
  }
);
