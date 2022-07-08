import Link from "next/link";
import React from "react";
import LoggedButton from "../buttons/LoggedButton/LoggedButton";
import { Icon } from "@iconify/react";
import SignInButton from "../buttons/SignInButton/SignInButton";
import SignUpButton from "../buttons/SignUpButton/SignUpButton";

import { useAuth } from "../../hooks/useAuth";

import { useShopCart } from "../../contexts/ShopCart/ShopCartContext";
import { createStyles, makeStyles } from "@mui/styles";
import { Button, Grid, Typography } from "@mui/material";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      height: "6rem",
      backgroundColor: "#141a29",
      position: "sticky",
      width: "100%",
      zIndex: "999999",
    },
    content: {
      maxWidth: "1120px",
      height: "6rem",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
    },
    nav: {
      color: "#fff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginLeft: "5rem",

      "& a": {
        paddingLeft: "3rem",
        padding: "0 0.5rem",
      },
    },
    carBtn: {
      position: "relative",
    },
    cartIndicator: {
      width: "1.5rem",
      height: "1.5rem",
      borderRadius: "50%",
      backgroundColor: "red",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      bottom: "0",
      right: "0",
      color: "white",
      transform: "translate(5%, 5%)",
    },
  })
);
export default function Header() {
  const { openCart, cartQuantity } = useShopCart();
  const auth = useAuth();
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <header className={classes.content}>
        <nav className={classes.nav}>
          <Typography fontSize="1.6rem" variant="h5">
            My Shop
          </Typography>
          <Link href="/">
            <a href="">Home</a>
          </Link>

          <Link href="/privado">
            <a href="">Products</a>
          </Link>
        </nav>
        <Grid container alignItems="center" justifyContent="center">
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
          <Button
            variant="contained"
            sx={{ outline: "none", background: "transparent" }}
            className={classes.carBtn}
            onClick={openCart}
          >
            <Icon
              icon="el:shopping-cart-sign"
              color="white"
              width={40}
              height={40}
            />
            <div className={classes.cartIndicator}>{cartQuantity}</div>
          </Button>
        </Grid>
      </header>
    </Grid>
  );
}
