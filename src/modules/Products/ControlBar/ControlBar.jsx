import { useForm } from "react-hook-form";
import { useEffect } from "react";

import CheckBox from "/src/shared/components/CheckBox/CheckBox";
import TextField from "/src/shared/components/TextField/TextField";
import Select from "/src/shared/components/Select/Select";

import { fields, defaultValues } from "./fields";

import styles from "./ControlBar.module.css";

export default function ControlBar({ handleFilterChange }) {
  const { register, watch, setValue } = useForm();
  useEffect(() => {
    const subscription = watch((value) => {
      handleFilterChange(value);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className={styles.controlBar}>
      <div className={styles.inputGroup}>
        <p className={styles.label}>Price</p>
        <TextField
          variant="outlined"
          showError={false}
          {...fields.priceFrom}
          register={register}
          className={styles.textField}
        />
        <TextField
          variant="outlined"
          showError={false}
          {...fields.priceTo}
          register={register}
          className={styles.textField}
        />
      </div>
      <div className={styles.inputGroup}>
        <p className={styles.label}>Discounted items</p>
        <CheckBox
          {...fields.discounted}
          register={register}
          setValue={setValue}
        />
      </div>
      <div className={styles.inputGroup}>
        <p className={styles.label}>Sorted</p>
        <Select
          {...fields.sort}
          register={register}
          setValue={setValue}
          defaultValue={defaultValues.sort}
        />
      </div>
    </div>
  );
}
