import Link from "next/link";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import LoggedButton from "../buttons/LoggedButton/LoggedButton";
import { FiShoppingCart } from "react-icons/fi";
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
            <a href="">Products</a>
          </Link>
        </nav>
        <div>
          {!auth.user && (
            <Link href="/cadastrar">
              <a>
                <SignUpButton />
              </a>
            </Link>
          )}
          {auth.user ? (
            <LoggedButton />
          ) : (
            <Link href="/login">
              <a>
                <SignInButton />
              </a>
            </Link>
          )}
        </div>
        <FiShoppingCart color="white" size={30} />
      </div>
    </header>
  );
}
