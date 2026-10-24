import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styles from "./LoginForm/LoginForm.module.sass";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/"), 1000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={styles.formTitle}>
      Page Not Found. Redirecting to Home...
    </div>
  );
}

export default NotFound;
