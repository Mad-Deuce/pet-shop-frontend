import styles from "./TextField.module.css";

export default function TextField({ variant="", register, name, error, ...props }) {
  const  fullClassName = `${styles.input} ${styles[variant]} `

  return (
    <div className={styles.textField}>
      <input {...register(name)} {...props} className={fullClassName} />
      <p className={styles.error}>{error?.message}</p>
    </div>
  );
}
