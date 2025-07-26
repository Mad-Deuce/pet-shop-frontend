import ReactSelect from "react-select";

import styles from "./Select.module.css";

const theme = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderColor: state.isFocused
      ? "var(--color-text-primary)"
      : "var(--color-border)",
    boxShadow: "none",
    "&:hover": { borderColor: "var(--color-text-primary)" },
  }),
  container: (baseStyles) => ({
    ...baseStyles,
    width: "200px",
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    padding: "1rem",
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: "none",
  }),
  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles,
    transition: "transform 0.2s ease-in-out",
    transform: state.selectProps.menuIsOpen ? "rotate(0deg)" : "rotate(180deg)",
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: "#fff",
    color: state.isSelected
      ? "var(--color-text-primary)"
      : "var(--color-text-secondary)",
    fontWeight: "500",
    whiteSpace: "nowrap",
    "&:hover": { backgroundColor: "lightgray" },
  }),
};

export default function Select({
  className = "",
  register = () => {},
  setValue,
  name,
  options,
  ...props
}) {
  const fullClassName = `${styles.select} ${className} `;

  return (
    <ReactSelect
      className={fullClassName}
      classNamePrefix="app-select"
      styles={theme}
      {...register(name)}
      {...props}
      defaultValue={options[0]}
      options={options}
      onChange={(value) => setValue(name, value)}
    />
  );
}
