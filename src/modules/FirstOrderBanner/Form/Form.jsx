import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";

import Button from "/src/shared/components/Button/Button";
import TextField from "/src/shared/components/TextField/TextField";

import { defaultValues, fields, registerSchema } from "./fields";
import { selectIsFirstOrder } from "/src/redux/first-order/first-order-selectors";
import { sendFirstOrderThunk } from "/src/redux/first-order/first-order-thunk";

import styles from "./Form.module.css";

export default function Form({ className }) {
  const dispatch = useDispatch();
  const { isFirstOrder, loading, error } = useSelector(selectIsFirstOrder);

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
    dispatch(sendFirstOrderThunk(values));
    reset();
  };

  return (
    <>
      {loading && <p className={styles.altMessage}>submitting...</p>}
      {!isFirstOrder && <p className={styles.altMessage}>Request Submitted</p>}
      {isFirstOrder && !loading && (
        <form className={fullClassName} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputsGroup}>
            <TextField
              className={styles.input}
              variant="filled"
              register={register}
              {...fields.name}
              error={errors.name}
            />
            <TextField
              className={styles.input}
              variant="filled"
              register={register}
              {...fields.phone}
              error={errors.phone}
            />
            <TextField
              className={styles.input}
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
