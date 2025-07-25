import styles from "./Button.module.css";

export default function Button({
  variant = "text",
  className,
  active = false,
  children,
  handleClick,
  ...props
}) {
  const fullClassName = `${styles.button} ${styles[variant]} ${
    active && styles.active
  } ${className}`;

  return (
    <button
      className={fullClassName}
      onClick={() => handleClick(event)}
      {...props}
    >
      {children}
    </button>
  );
}
