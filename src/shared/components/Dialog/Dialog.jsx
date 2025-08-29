import { CloseIcon } from "/src/shared/components/icons";

import styles from "./Dialog.module.css";

export default function Dialog({ children, className }) {
  const fullClassName = `${styles.dialog} ${className}`;
  return <div className={fullClassName}>{children}</div>;
}
