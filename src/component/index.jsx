import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import styles from "../component/LoginForm/LoginForm.module.sass";
function LoginPage() {
  return (
    <section className={styles.pageContainer}>
      <h2 className={styles.formTitle}>Login to your account</h2>
      <LoginForm />
    </section>
  );
}

export default LoginPage;
