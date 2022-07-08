import { AddShoppingCart } from "@mui/icons-material";
import { Button, Card, Snackbar, Typography } from "@mui/material";
import React from "react";
import { useShopCart } from "../../contexts/ShopCart/ShopCartContext";
import { Products } from "../../models/Products";
import { StarRating } from "../StarRating/StarRating";
import { formatCurrency } from "../utilities/formatCurrency";

import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { makeStyles, createStyles } from "@mui/styles";
import Link from "next/link";

interface ProductRequest {
  product: Products;
}

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      boxShadow: "0px 2px 4px rgb(0, 0, 0, 25%)",
      width: "15.31rem",
      textAlign: "center",
      margin: "1.5rem",
      cursor: "pointer",
      backgroundColor: "#fff",
      gap: "0.5rem",
    },
    cardImg: {
      width: " 15.31rem",
      objectFit: "cover",
      transition: "transform .2s",
      height: "13rem",
      "&:hover": {
        transform: "scale(0.95)",
      },
    },
    discount: {
      backgroundColor: "black",
      color: "#fff",
      padding: "1rem 2rem",
      marginTop: "-1.8rem",
      zIndex: 100,
    },
  })
);
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function CardProduct({ product }: ProductRequest) {
  const { increaseCartQuantity } = useShopCart();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const addProductToCart = () => {
    increaseCartQuantity(product.id);
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Card className={classes.card}>
      <img
        className={classes.cardImg}
        src={product.thumbnail}
        alt={product.title}
      />
      <span className={classes.discount}>
        {product.discountPercentage}% OFF
      </span>
      <Typography fontSize="1.2rem" variant="h4">
        {product.title}
      </Typography>
      <Typography fontWeight="bold" fontSize="1.2" variant="h4">
        {formatCurrency(product.price)}
      </Typography>
      <StarRating ratingStar={product.rating} />

      <Button variant="outlined">Detalhes</Button>
      <Button
        onClick={addProductToCart}
        variant="contained"
        fullWidth
        endIcon={<AddShoppingCart />}
      >
        Adicionar ao Carrinho
      </Button>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Adicionado ao carrinho
        </Alert>
      </Snackbar>
    </Card>
  );
}
