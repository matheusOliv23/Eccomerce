import Link from "next/link";
import React from "react";
import LoggedButton from "../buttons/LoggedButton/LoggedButton";
import { Icon } from "@iconify/react";
import SignInButton from "../buttons/SignInButton/SignInButton";
import SignUpButton from "../buttons/SignUpButton/SignUpButton";

import { useAuth } from "../../hooks/useAuth";

import { useShopCart } from "../../contexts/ShopCart/ShopCartContext";
import { createStyles, makeStyles } from "@mui/styles";
import { Button, Grid } from "@mui/material";

import {
  CartIndicator,
  HeaderContainer,
  HeaderContent,
  NavMenu,
} from "./styles";
import Navlink from "./Navlink";

const useStyles = makeStyles(() =>
  createStyles({
    carBtn: {
      position: "relative",
    },
  })
);

const menu = [
  { titulo: "Home", rota: "/" },
  { titulo: "Produtos", rota: "/produtos" },
  { titulo: "Contato", rota: "/contato" },
  { titulo: "Sobre ", rota: "/sobre" },
];
export default function Header() {
  const { openCart, cartQuantity } = useShopCart();
  const auth = useAuth();
  const classes = useStyles();

  return (
    <HeaderContainer>
      <HeaderContent>
        <h2>Tech Shop</h2>
        <NavMenu>
          {menu.map((item, index) => (
            <Navlink key={index} titulo={item.titulo} rota={item.rota} />
          ))}
        </NavMenu>
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
            <CartIndicator>{cartQuantity}</CartIndicator>
          </Button>
        </Grid>
      </HeaderContent>
    </HeaderContainer>
  );
}
