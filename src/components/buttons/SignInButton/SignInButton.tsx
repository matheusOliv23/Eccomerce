import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/Auth/AuthContext";
import styles from "./styles.module.scss";
import { FaPowerOff } from "react-icons/fa";
import { useRouter } from "next/router";

export default function SignInButton() {
  const auth = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = async () => {
    await auth.signout();
    router.push("/");
  };
  return auth.user ? (
    <button type="button" className={styles.loggedButton}>
      <img src="matheus.jpg" alt="Minha foto" />
      Matheus
      <FaPowerOff onClick={handleLogout} color="#af0129" />
    </button>
  ) : (
    <button type="button" className={styles.loginButton}>
      Logar
    </button>
  );
}
