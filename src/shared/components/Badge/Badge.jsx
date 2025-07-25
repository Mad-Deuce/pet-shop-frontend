import styles from "./Badge.module.css";

export default function Badge({ className, children }) {
  const fullClassName = `${styles.badge} ${className}`;
  return <p className={fullClassName}>{children}</p>;
}
