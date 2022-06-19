import React from "react";
import styles from "./styles.module.scss";

export default function SignInButton() {
  return (
    <button type="button" className={styles.loginButton}>
      Logar
    </button>
  );
}
