import { Icon } from "@iconify/react";
import { AddShoppingCart } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useShopCart } from "../../contexts/ShopCart/ShopCartContext";
import { Products } from "../../models/Products";
import { StarRating } from "../StarRating/StarRating";
import styles from "./styles.module.scss";

interface ProductRequest {
  product: Products;
}
export default function CardProduct({ product }: ProductRequest) {
  const { increaseCartQuantity } = useShopCart();

  return (
    <section className={styles.card}>
      <img src={product.thumbnail} alt={product.title} />
      <span className={styles.discount}>{product.discountPercentage}% OFF</span>
      <h4>{product.title}</h4>
      <h3>$ {product.price}</h3>
      <StarRating ratingStar={product.rating} />
      <Button
        onClick={() => increaseCartQuantity(product.id)}
        variant="contained"
        fullWidth
        endIcon={<AddShoppingCart />}
      >
        Adicionar ao Carrinho
      </Button>
    </section>
  );
}
