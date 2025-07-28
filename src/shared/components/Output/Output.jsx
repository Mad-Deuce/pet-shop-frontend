import styles from "./Output.module.css";

export default function Output({
  className="",
  error = null,
  loading = false,
  children,
  altMessage = "",
  condition = true,
}) {
  const fullClassName = `${styles.output} ${className}`;

  return (
    <div className={fullClassName}>
      {loading && <p className={styles.loading}>loading...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {!loading && !error && condition && children}
      {!loading && !error && !condition && (
        <p className={styles.altMessage}>{altMessage}</p>
      )}
    </div>
  );
}
