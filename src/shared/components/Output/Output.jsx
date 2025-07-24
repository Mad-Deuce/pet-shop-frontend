import styles from "./Output.module.css";

export default function Output({
  error = null,
  loading = false,
  children,
  altMessage = "",
  condition = true,
}) {
  return (
    <div className={styles.output}>
      {loading && <p className={styles.loading}>loading...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {!loading && !error && condition && children}
      {!loading && !error && !condition && (
        <p className={styles.altMessage}>{altMessage}</p>
      )}
    </div>
  );
}
