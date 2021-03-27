import type { HTMLAttributes, ReactNode } from "react";

import styles from "./MaxWidthWrapper.module.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className: string;
}

const MaxWidthWrapper = ({ children, className = "", ...delegated }: Props) => {
  return (
    <div className={`${styles.maxWidthWrapper} ${className}`} {...delegated}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
