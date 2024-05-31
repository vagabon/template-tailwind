import { DropDown } from "ds/dropdown/DropDown";
import { memo, useCallback } from "react";

export interface IADrawerProps {}

export const ADrawer: React.FC<IADrawerProps> = memo(() => {
  const test = useCallback(() => {
    return { id: <>Test</> };
  }, []);

  return <DropDown content={test()} left={true} />;
});
