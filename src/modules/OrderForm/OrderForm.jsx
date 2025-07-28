import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "/src/shared/components/Button/Button";
import TextField from "/src/shared/components/TextField/TextField";
import Output from "/src/shared/components/Output/Output";

import { defaultValues, fields, registerSchema } from "./fields";

import styles from "./OrderForm.module.css";

export default function OrderForm({
  className,
  buttonVariant = "text",
  inputVariant = "filled",
  condition,
  error,
  loading,
  onSubmit,
}) {
  const fullClassName = `${styles.form} ${className}`;

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });

  const handleOnSubmit = async (values) => {
    onSubmit(values);
    reset();
  };

  return (
    <Output
      error={error}
      loading={loading}
      condition={condition}
      altMessage="Request Submitted"
    >
      <form className={fullClassName} onSubmit={handleSubmit(handleOnSubmit)}>
        <div className={styles.inputsGroup}>
          <TextField
            className={styles.input}
            variant={inputVariant}
            register={register}
            {...fields.name}
            error={errors.name}
          />
          <TextField
            className={styles.input}
            variant={inputVariant}
            register={register}
            {...fields.phone}
            error={errors.phone}
          />
          <TextField
            className={styles.input}
            variant={inputVariant}
            register={register}
            {...fields.email}
            error={errors.email}
          />
        </div>
        <p className={styles.error}>{error}</p>
        <Button
          type="submit"
          variant={buttonVariant}
          active={!condition}
          disabled={!isValid}
        >
          {!condition ? "Request Submitted" : "Get a discount"}
        </Button>
      </form>
    </Output>
  );
}
