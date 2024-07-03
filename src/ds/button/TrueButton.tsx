import clsx from "clsx";
import { Closeicon } from "icon/Closeicon";
import { MouseEvent, memo, useCallback } from "react";

export interface ITrueButtonProps {
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const TrueButton: React.FC<ITrueButtonProps> = memo(
  ({ className, onClick }) => {
    const handleClick = useCallback(
      (event: MouseEvent<HTMLButtonElement>) => {
        onClick?.(event);
      },
      [onClick]
    );

    return (
      <button className={clsx(className)} type="button" onClick={handleClick}>
        {<Closeicon /> ?? "reset"}
      </button>
    );
  }
);
