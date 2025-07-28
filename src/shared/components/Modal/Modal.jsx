import { CloseIcon } from "/src/shared/components/icons";

import styles from "./Modal.module.css";

export default function Modal({ children, modalClose, className }) {
  return (
    <div className={styles.modal} onClick={modalClose}>
      <div
        className={`${styles.dialog} ${className}`}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        {children}
        <div className={styles.closeButton} onClick={modalClose}>
          <CloseIcon className={styles.icon} />
        </div>
      </div>
    </div>
  );
}
