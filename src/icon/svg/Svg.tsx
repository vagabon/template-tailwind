import { memo } from "react";

export interface ISvgProps {
  className?: string;
  d: string;
}

const Svg: React.FC<ISvgProps> = memo(({ className = "", d }) => {
  return (
    <svg
      className={"w-6 h-6 " + className}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={d}></path>
    </svg>
  );
});

export default Svg;
