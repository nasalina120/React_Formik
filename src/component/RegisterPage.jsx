import React from "react";
import RegisterForm from "./RegisterForm/RegisterForm";
import styles from "../component/LoginForm/LoginForm.module.sass";

function RegisterPage() {
  return (
    <section className={styles.pageContainer}>
      <h2 className={styles.formTitle}>Create an account</h2>
      <RegisterForm />
    </section>
  );
}

export default RegisterPage;
