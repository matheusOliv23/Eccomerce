import { useRouter } from "next/router";
import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import styles from "./styles.module.scss";

export default function LogoutButton() {
  const auth = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await auth.logout();
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
