import React from "react";
import { Field } from "formik";
import classNames from "classnames";

function Input(props) {
  const { name, label, classes, ...restProps } = props;

  return (
    <Field name={name}>
      {({ field, meta }) => {
        const hasError = meta.error && meta.touched;

        const inputClassNames = classNames(classes.input, {
          [classes.valid]: !meta.error && meta.touched,
          [classes.invalid]: meta.error && meta.touched,
        });

        const errorClassNames = classNames(classes.error, {
          [classes.errorVisible]: hasError,
        });

        return (
          <label className={classes.wrapper}>
            <span>{label}</span>
            <input className={inputClassNames} {...restProps} {...field} />

            <span className={errorClassNames}>
              {hasError ? meta.error : ""}
            </span>
          </label>
        );
      }}
    </Field>
  );
}

export default Input;
