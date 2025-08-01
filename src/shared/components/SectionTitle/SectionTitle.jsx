import { Link } from "react-router-dom";

import styles from "./SectionTitle.module.css";

export default function SectionTitle({
  children,
  showButton,
  buttonLabel,
  buttonLink = "/",
  onClick
}) {
  return (
    <div className={styles.sectionTitle}>
      <h1 className={styles.title}>{children}</h1>
      {showButton && (
        <>
          <div className={styles.line}></div>
          <Link to={buttonLink}>
            <button type="button" className={styles.button} onClick={onClick}>
              {buttonLabel}
            </button>
          </Link>
        </>
      )}
    </div>
  );
}
