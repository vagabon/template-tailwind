import { clsx } from "clsx";
import {
  MouseEvent,
  PropsWithChildren,
  memo,
  useCallback,
  useMemo,
} from "react";
import { Translate } from "../../i18n/component/Translate";
import { useRouterContext } from "../../router/context/RouterContext";

const switchType = (type?: string) => {
  let className =
    "focus:ring-2 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5";
  if (type === "icon") {
    className =
      "inline-flex items-center p-1 m-1 text-sm rounded-lg focus:outline-none focus:ring-2";
  }
  return className;
};

export interface IButtonProps extends PropsWithChildren {
  url?: string;
  text?: string;
  type?: string;
  callback?: () => void;
}

export const Button: React.FC<IButtonProps> = memo(
  ({ url = "", text, type = "simple", callback, children }) => {
    const navigate = useRouterContext();
    const className = useMemo(() => switchType(type), [type]);

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
        className={clsx(className, "text-" + type)}
        onClick={handleClick}
      >
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
