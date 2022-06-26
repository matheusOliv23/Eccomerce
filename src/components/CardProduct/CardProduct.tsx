import React from "react";
import { Products } from "../../models/Products";
import Button from "../Button/Button";
import { StarRating } from "../StarRating/StarRating";
import styles from "./styles.module.scss";

interface ProductRequest {
  product: Products;
}
export default function CardProduct({ product }: ProductRequest) {
  return (
    <section className={styles.card}>
      <img src={product.thumbnail} alt={product.title} />
      <span className={styles.discount}>{product.discountPercentage}% OFF</span>
      <h4>{product.title}</h4>
      <h3>$ {product.price}</h3>
      <StarRating ratingStar={product.rating} />
      <div>{product.rating}</div>
      <Button>Add to Cart</Button>
    </section>
  );
}
