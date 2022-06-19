import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import styles from "./styles.module.scss";

export default function index() {
  const auth = useContext(AuthContext);
  const router = useRouter();

  console.log(auth.user);

  const handleLogout = async () => {
    await auth.signout();
    router.push("/");
  };
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div style={{ color: "#ffff" }}>LOGOMARCA</div>
        <nav>
          <Link href="/">
            <a href="">Home</a>
          </Link>

          <Link href="/privado">
            <a href="">Privado</a>
          </Link>
        </nav>

        <div>
          {!auth.user && (
            <Link href="/logar">
              <a href="">Login</a>
            </Link>
          )}
          {!auth.user && (
            <Link href="/cadastrar">
              <a href="">Criar uma conta</a>
            </Link>
          )}
          {auth.user && <button onClick={handleLogout}>Sair</button>}
        </div>
      </div>
    </header>
  );
}
