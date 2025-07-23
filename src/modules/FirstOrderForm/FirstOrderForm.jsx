import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Container from "/src/shared/components/Container/Container";
import Button from "/src/shared/components/Button/Button";
import TextField from "/src/shared/components/TextField/TextField";

import { defaultValues, fields, registerSchema } from "./fields";
import { saleSendApi } from "/src/shared/api/salesApi";

import firstOrderFormImg from "./img.svg";

import styles from "./FirstOrderForm.module.css";

export default function FirstOrderForm() {
  const onSubmit = async (values) => {
    const { data, error } = await saleSendApi(values);
    if (error)
      return alert(
        `First order - ${error.message || error.response.data.message}`
      );
    reset();
    return alert(`First order - ${data.message}`);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(registerSchema),
    mode: "onSubmit",
  });

  return (
    <Container>
      <div className={styles.firstOrderForm}>
        <h1 className={styles.title}>5% off on the first order</h1>
        <div className={styles.content}>
          <div className={styles.imgWrapper}>
            <img
              className={styles.img}
              src={firstOrderFormImg}
              alt="no image"
            />
          </div>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <TextField
              register={register}
              {...fields.name}
              error={errors.name}
            />
            <TextField
              register={register}
              {...fields.phone}
              error={errors.phone}
            />
            <TextField
              register={register}
              {...fields.email}
              error={errors.email}
            />
            <Button disabled={!isValid} className={styles.button} type="submit">
              Get a discount
            </Button>
          </form>
        </div>
      </div>
      ;
    </Container>
  );
}
