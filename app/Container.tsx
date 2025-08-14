import React, { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-full
      sm:max-w-xl
      md:max-w-3xl
      lg:max-w-5xl
      xl:max-w-8xl
      mx-auto
      px-4
      sm:px-6
      lg:px-8  overflow-ellipsis">
      {children}
    </div>
  );
};

export default Container;