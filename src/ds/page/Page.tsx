import { PropsWithChildren, memo } from "react";

export interface IPageProps extends PropsWithChildren {}

export const Page: React.FC<IPageProps> = memo(({ children }) => {
  return (
    <section className="mx-auto max-w-screen-lg px-3 pt-3 bg-gray-50 dark:bg-gray-900">
      <div>{children}</div>
    </section>
  );
});
