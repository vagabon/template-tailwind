import { PropsWithChildren, memo, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const switchType = (type?: string) => {
  let className =
    "text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800";
  if (type === "primary") {
    className =
      "text-white bg-green-700 hover:bg-green-800 focus:ring-2 focus:ring-green-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-primary-800";
  }
  if (type === "icon") {
    className =
      "inline-flex items-center p-1 m-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600";
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
  ({ url = "", text, type, callback, children }) => {
    const navigate = useNavigate();
    const className = useMemo(() => switchType(type), [type]);

    const handleClick = useCallback(() => {
      if (url) {
        navigate(url);
      } else {
        callback?.();
      }
    }, [url, navigate, callback]);

    return (
      <a href="#" className={className} onClick={handleClick}>
        {text && <span>{text}</span>}
        {children}
      </a>
    );
  }
);
