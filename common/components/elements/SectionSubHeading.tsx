import React, { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const SectionSubHeading: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-2">
      {children}
    </div>
  );
};

export default SectionSubHeading;