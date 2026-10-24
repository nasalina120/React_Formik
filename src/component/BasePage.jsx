import React from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "./BasePage.module.sass";

function BasePage() {
  return (
    <div className={styles.baseLayoutContainer}>
      <header className={styles.header}>
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link to="/" className={styles.navLink}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className={styles.navLink}>
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
}

export default BasePage;
