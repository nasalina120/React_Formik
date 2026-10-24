import classNames from "classnames";
import { Field } from "formik";
import React from "react";

function Input(props) {
  const { name, label, ...restProps } = props;

  return (
    <Field name={name}>
      {({
        field, // { name, value, onChange, onBlur }
        form: { errors, touched },
        meta,
      }) => {
        return (
          <label>
            <span>{label}</span>
            <input {...restProps} {...field} />
          </label>
        );
      }}
    </Field>
  );
}

export default Input;
