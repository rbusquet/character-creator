import type { ReactNode } from "react";

import styles from "./ButtonRow.module.css";

const ButtonRow = ({ children }: { children: ReactNode }) => {
  return <div className={styles.buttonRow}>{children}</div>;
};

export default ButtonRow;
