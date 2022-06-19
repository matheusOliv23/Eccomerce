import Link from "next/link";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import LogoutButton from "../buttons/LogoutButton/LogoutButton";
import SignInButton from "../buttons/SignInButton/SignInButton";
import SignUpButton from "../buttons/SignUpButton/SignUpButton";
import styles from "./styles.module.scss";

export default function index() {
  const auth = useContext(AuthContext);

  console.log(auth.user);

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
          {/* {!auth.user && (
            <Link href="/login">
              <a>
                <SignInButton />
              </a>
            </Link>
          )} */}
          {!auth.user && (
            <Link href="/cadastrar">
              <a>
                <SignUpButton />
              </a>
            </Link>
          )}
          {/* {auth.user && <LogoutButton />} */}
          <SignInButton />
        </div>
      </div>
    </header>
  );
}
