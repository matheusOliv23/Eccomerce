import { AddShoppingCart } from "@mui/icons-material";
import { Snackbar, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { useShopCart } from "../../contexts/ShopCart/ShopCartContext";
import { Products } from "../../models/Products";
import { StarRating } from "../StarRating/StarRating";
import { formatCurrency } from "../utilities/formatCurrency";

import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { makeStyles, createStyles } from "@mui/styles";
import { Card, CardImage, Discount, Price } from "./styles";
import Button from "../Button/Button";

interface ProductRequest {
  product: Products;
}

const useStyles = makeStyles(() =>
  createStyles({
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
    <Card>
      <CardImage src={product.thumbnail} alt={product.title} />
      <Discount>{product.discountPercentage}% OFF</Discount>
      <h3>{product.title}</h3>
      <Price>{formatCurrency(product.price)}</Price>
      <StarRating ratingStar={product.rating} />

      <Button onClick={addProductToCart}>Adicionar ao Carrinho</Button>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Adicionado ao carrinho
        </Alert>
      </Snackbar>
    </Card>
  );
}
