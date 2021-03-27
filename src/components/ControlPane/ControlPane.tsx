import type { ReactNode } from "react";

import ToggleButton from "../ToggleButton";
import ButtonRow from "../ButtonRow";

import styles from "./ControlPane.module.css";

interface Option<T> {
  id: T;
  label: string;
  color?: string;
  children: ReactNode;
}

interface Props<T> {
  title: string;
  type?: string;
  options: Option<T>[];
  currentOption: T;
  handleSelectOption(id: T): void;
}

function ControlPane<T>({
  title,
  type,
  options,
  currentOption,
  handleSelectOption,
}: Props<T>) {
  return (
    <div className={styles.controlPane}>
      <h2 className={styles.title}>
        {title}

        <span className={styles.metadata}>{options.length} options</span>
      </h2>
      <ButtonRow>
        {options.map(({ id, label, color, children }) => (
          <ToggleButton
            key={`${id}`}
            isSelected={currentOption === id}
            onClick={() => handleSelectOption(id)}
            label={label}
            color={color}
          >
            {children}
          </ToggleButton>
        ))}
      </ButtonRow>
    </div>
  );
}

export default ControlPane;
