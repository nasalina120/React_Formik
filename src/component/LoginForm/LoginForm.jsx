import { Formik, Form, Field, ErrorMessage } from "formik";
import Input from "./Input/Input";
import USER_VALIDATION_SCHEMA from "../../utils/validate";

function LoginForm() {
  const initialValues = { email: "", password: "" };

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
      <Form>
        <Input
          label="Email:"
          type="email"
          name="email"
          placeholder="your@mail.com"
        />
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="yourPassword"
        />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
}

export default LoginForm;
