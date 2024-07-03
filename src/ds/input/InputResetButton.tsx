import { TrueButton } from "ds/button/TrueButton";
import { memo } from "react";

export interface IInputResetButtonProps {
  callback: () => void;
}

export const InputResetButton: React.FC<IInputResetButtonProps> = memo(
  ({ callback }) => {
    return <TrueButton onClick={callback} />;
  }
);
