import Link from "next/link";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import LoggedButton from "../buttons/LoggedButton/LoggedButton";
import { Icon } from "@iconify/react";
import SignInButton from "../buttons/SignInButton/SignInButton";
import SignUpButton from "../buttons/SignUpButton/SignUpButton";
import styles from "./styles.module.scss";
import { useAuth } from "../../hooks/useAuth";
import Button from "../Button/Button";
import { useShopCart } from "../../contexts/ShopCart/ShopCartContext";

export default function Header() {
  const { openCart, cartQuantity } = useShopCart();
  const auth = useAuth();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h2 style={{ color: "#ffff" }}>My Shop</h2>
        <nav className={styles.navbar}>
          <Link href="/">
            <a href="">Home</a>
          </Link>

          <Link href="/privado">
            <a href="">Products</a>
          </Link>
        </nav>
        <div className={styles.section}>
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
          <button
            style={{ border: "none", background: "transparent" }}
            className={styles.cartButton}
            onClick={openCart}
          >
            <Icon
              icon="el:shopping-cart-sign"
              color="white"
              width={40}
              height={40}
            />
            <div className={styles.cartIndicator}>{cartQuantity}</div>
          </button>
        </div>
      </div>
    </header>
  );
}
