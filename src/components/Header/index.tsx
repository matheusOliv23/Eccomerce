import Link from "next/link";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import LoggedButton from "../buttons/LoggedButton/LoggedButton";
import { FiShoppingCart } from "react-icons/fi";
import SignInButton from "../buttons/SignInButton/SignInButton";
import SignUpButton from "../buttons/SignUpButton/SignUpButton";
import styles from "./styles.module.scss";
import { useAuth } from "../../hooks/useAuth";

export default function Header() {
  const auth = useAuth();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h2 style={{ color: "#ffff" }}>My Shop</h2>
        <nav>
          <Link href="/">
            <a href="">Home</a>
          </Link>

          <Link href="/privado">
            <a href="">Products</a>
          </Link>
        </nav>
        <div>
          {!auth.email && (
            <Link href="/cadastrar">
              <a>
                <SignUpButton />
              </a>
            </Link>
          )}
          {auth.email ? (
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
