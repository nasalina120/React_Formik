import styles from "../LoginForm/LoginForm.module.sass";
import USER_VALIDATION_SCHEMA from "../../utils/validate";
import Input from "../LoginForm/Input/Input";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConf: "",
  };

  const classes = {
    wrapper: styles.inputWrapper,
    input: styles.customInput,
    error: styles.errorMessage,
    valid: styles.valid,
    errorVisible: styles.errorVisible,
    invalid: styles.invalid,
  };

  const handleSubmit = (values, formikBag) => {
    console.log("Submit form with create account:", values);
    formikBag.resetForm();
    navigate("/");
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_VALIDATION_SCHEMA}
    >
      <Form className={styles.loginForm}>
        <Input
          type="text"
          name="firstName"
          label="FirstName:"
          placeholder="yourfirstName"
          classes={classes}
        />
        <Input
          type="text"
          name="lastName"
          label="LastName:"
          placeholder="yourlastName"
          classes={classes}
        />

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

        <Input
          type="password"
          name="passwordConf"
          label="PasswordConf:"
          placeholder="passwordConf"
          classes={classes}
        />

        <button type="submit" className={styles.submitBtn}>
          Create account
        </button>
      </Form>
    </Formik>
  );
}

export default RegisterForm;
