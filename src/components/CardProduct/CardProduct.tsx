import { Icon } from "@iconify/react";
import { AddShoppingCart } from "@mui/icons-material";
import { Button, Card, Snackbar } from "@mui/material";
import React from "react";
import { useShopCart } from "../../contexts/ShopCart/ShopCartContext";
import { Products } from "../../models/Products";
import { StarRating } from "../StarRating/StarRating";
import { formatCurrency } from "../utilities/formatCurrency";
import styles from "./styles.module.scss";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

interface ProductRequest {
  product: Products;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function CardProduct({ product }: ProductRequest) {
  const { increaseCartQuantity } = useShopCart();
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
    <Card className={styles.card}>
      <img src={product.thumbnail} alt={product.title} />
      <span className={styles.discount}>{product.discountPercentage}% OFF</span>
      <h3>{product.title}</h3>
      <h4>{formatCurrency(product.price)}</h4>
      <StarRating ratingStar={product.rating} />
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
