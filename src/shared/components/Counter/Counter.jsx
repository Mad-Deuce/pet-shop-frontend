import { useEffect, useState } from "react";

import { MinusIcon, PlusIcon } from "/src/shared/components/icons";

import styles from "./Counter.module.css";

export default function Counter({
  initValue = 9,
  min = 0,
  max = 5,
  handleChange,
}) {
  const [value, setValue] = useState(initValue);

  useEffect(() => {
    handleChange(value);
  }, [handleChange, value]);

  const handleOnChange = (inputValue) => {
    if (inputValue < min) return setValue(min);
    if (inputValue > max) return setValue(max);
    setValue(inputValue);
  };

  const handleOnClick = (step) => {
    if (value + step < min) return setValue(min);
    if (value + step > max) return setValue(max);
    setValue((prev) => prev + step);
  };

  return (
    <div className={styles.counter}>
      <div
        className={`${styles.button} ${styles.left}`}
        onClick={() => handleOnClick(-1)}
      >
        <MinusIcon />
      </div>
      <input
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={() => handleOnChange(event.target.value)}
        className={styles.input}
      />
      <div
        className={`${styles.button} ${styles.right}`}
        onClick={() => handleOnClick(1)}
      >
        <PlusIcon />
      </div>
    </div>
  );
}
