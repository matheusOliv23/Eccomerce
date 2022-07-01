import { Icon } from "@iconify/react";
import { AddShoppingCart } from "@mui/icons-material";
import { Button, Card } from "@mui/material";
import React from "react";
import { useShopCart } from "../../contexts/ShopCart/ShopCartContext";
import { Products } from "../../models/Products";
import { StarRating } from "../StarRating/StarRating";
import { formatCurrency } from "../utilities/formatCurrency";
import styles from "./styles.module.scss";

interface ProductRequest {
  product: Products;
}
export default function CardProduct({ product }: ProductRequest) {
  const { increaseCartQuantity } = useShopCart();

  return (
    <Card className={styles.card}>
      <img src={product.thumbnail} alt={product.title} />
      <span className={styles.discount}>{product.discountPercentage}% OFF</span>
      <h3>{product.title}</h3>
      <h4>{formatCurrency(product.price)}</h4>
      <StarRating ratingStar={product.rating} />
      <Button
        onClick={() => increaseCartQuantity(product.id)}
        variant="contained"
        fullWidth
        endIcon={<AddShoppingCart />}
      >
        Adicionar ao Carrinho
      </Button>
    </Card>
  );
}
