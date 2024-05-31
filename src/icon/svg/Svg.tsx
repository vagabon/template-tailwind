import { PropsWithChildren, SVGAttributes, memo } from "react";

export interface ISvgProps
  extends PropsWithChildren,
    SVGAttributes<SVGElement> {
  className?: string;
  d?: string;
}

const Svg: React.FC<ISvgProps> = memo(
  ({ className = "", d, children, ...rest }) => {
    return (
      <svg
        className={"w-5 h-5 " + className}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        {d && <path d={d}></path>}
        {children}
      </svg>
    );
  }
);

export default Svg;
