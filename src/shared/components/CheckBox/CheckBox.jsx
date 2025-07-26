import { useState } from "react";

import Icon from "./Icon/Icon";

import styles from "./CheckBox.module.css";

export default function CheckBox({
  register = () => {},
  setValue,
  name,
  className,
  ...props
}) {
  const [checked, setChecked] = useState(false);

  const fullClassName = `${styles.checkBox} ${className} ${
    checked ? styles.checked : ""
  } `;
  return (
    <div
      type="checkbox"
      className={fullClassName}
      {...register(name)}
      {...props}
      onClick={() => {
        setChecked((prev) => !prev);
        setValue(name, !checked);
      }}
    >
      {checked && <Icon />}
    </div>
  );
}
