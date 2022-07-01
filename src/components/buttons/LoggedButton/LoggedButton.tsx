import React from "react";
import styles from "./styles.module.scss";
import { FaPowerOff } from "react-icons/fa";
import { useRouter } from "next/router";
import { useAuth } from "../../../hooks/useAuth";

export default function LoggedButton() {
  const auth = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await auth.logout();
    router.push("/");
  };
  return (
    <button type="button" className={styles.loggedButton}>
      <img src="matheus.jpg" alt="Minha foto" />
      Matheus
      <FaPowerOff onClick={handleLogout} color="#af0129" />
    </button>
  );
}
