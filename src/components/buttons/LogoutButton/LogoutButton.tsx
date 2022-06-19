import { useRouter } from "next/router";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/Auth/AuthContext";
import styles from "./styles.module.scss";

export default function LogoutButton() {
  const auth = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = async () => {
    await auth.signout();
    router.push("/");
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className={styles.logoutButton}
    >
      Sair
    </button>
  );
}
