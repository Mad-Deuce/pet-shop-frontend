import styles from "./Button.module.css";

export default function Button({ variant = "text", children, ...props }) {
  return (
    <button className={`${styles.button} ${styles[variant]} `} {...props}>
      {children}
    </button>
  );
}
