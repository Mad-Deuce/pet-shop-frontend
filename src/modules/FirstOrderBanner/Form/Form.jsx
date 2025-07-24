import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useState } from "react";

import Button from "/src/shared/components/Button/Button";
import TextField from "/src/shared/components/TextField/TextField";

import useFetch from "/src/shared/hooks/useFetch";
import { defaultValues, fields, registerSchema } from "./fields";
import { saleSendApi } from "/src/shared/api/salesApi";

import styles from "./Form.module.css";

export default function Form({ className }) {
  const [isFirstOrder, setIsFirstOrder] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  const onSubmit = async (values) => {
    setLoading(true);
    setError(null);
    const { error } = await saleSendApi(values);
    setLoading(false);
    if (error) {
      return setError(error.message || error.response.data.message);
    }
    reset();
    setIsFirstOrder(false);
  };

  return (
    <>
      {loading && <p className={styles.altMessage}>submitting...</p>}
      {!isFirstOrder && <p className={styles.altMessage}>Request Submitted</p>}
      {isFirstOrder && !loading && (
        <form className={fullClassName} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputsGroup}>
            <TextField
              variant="filled"
              register={register}
              {...fields.name}
              error={errors.name}
            />
            <TextField
              variant="filled"
              register={register}
              {...fields.phone}
              error={errors.phone}
            />
            <TextField
              variant="filled"
              register={register}
              {...fields.email}
              error={errors.email}
            />
          </div>
          <p className={styles.error}>{error}</p>
          <Button
            type="submit"
            variant="text"
            active={!isFirstOrder}
            disabled={!isValid}
          >
            {!isFirstOrder ? "Request Submitted" : "Get a discount"}
          </Button>
        </form>
      )}
    </>
  );
}
