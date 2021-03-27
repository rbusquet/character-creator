import type { ReactNode, ButtonHTMLAttributes } from "react";

import styles from "./ToggleButton.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  color?: string;
  children: ReactNode;
  isSelected: boolean;
}

const ToggleButton = ({
  label,
  color,
  children,
  isSelected,
  ...delegated
}: Props) => {
  return (
    <button
      {...delegated}
      aria-pressed={isSelected}
      className={styles.toggleButton}
      style={{ backgroundColor: color }}
    >
      <span className="visually-hidden">hello</span>
      {children}
    </button>
  );
};

export default ToggleButton;
