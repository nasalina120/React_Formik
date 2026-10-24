import styles from "../LoginForm/LoginForm.module.sass";
import USER_VALIDATION_SCHEMA from "../../utils/validate";
import Input from "../LoginForm/Input/Input";
import { Formik, Form } from "formik";
function RegisterForm() {
  const initialValues = { email: "", password: "" };

  const classes = {
    wrapper: styles.inputWrapper,
    input: styles.customInput,
    error: styles.errorMessage,
    valid: styles.valid,
    errorVisible: styles.errorVisible,
    invalid: styles.invalid,
  };

  const handleSubmit = (values, formikBag) => {
    console.log("Submit form with values:", values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_VALIDATION_SCHEMA}
    >
      <Form className={styles.loginForm}>
        <Input
          type="email"
          name="email"
          label="Email:"
          placeholder="your@mail.com"
          classes={classes}
        />

        <Input
          type="password"
          name="password"
          label="Password:"
          placeholder="yourPassword"
          classes={classes}
        />

        <button type="submit" className={styles.submitBtn}>
          Login
        </button>
      </Form>
    </Formik>
  );
}

export default RegisterForm;
