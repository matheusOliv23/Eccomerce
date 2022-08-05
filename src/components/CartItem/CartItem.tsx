import { Add, DeleteForever, Remove } from "@mui/icons-material";
import {
  Button,
  Card,
  Fab,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { useShopCart } from "../../contexts/ShopCart/ShopCartContext";
import { ProductsRequest } from "../../models/Products";
import { formatCurrency } from "../utilities/formatCurrency";
import { CardItem, PriceContainer } from "./styles";

type CartItemProps = {
  id: number;
  quantity: number;
  products: ProductsRequest | undefined;
};

export default function CartItem({ id, quantity, products }: CartItemProps) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useShopCart();

  const item = products?.products.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <CardItem>
      {/* <Image
        src={item.thumbnail}
        alt={`${item.title}`}
        width={120}
        height={100}
      />

      <PriceContainer>
        <p>{item.title}</p> 
        <p>{formatCurrency(item.price)}</p>

        <Fab
          size="small"
          color="secondary"
          aria-label="remove"
          onClick={() => decreaseCartQuantity(item.id)}
        >
          <Tooltip title="Remover item">
            <Remove />
          </Tooltip>
        </Fab>
        <p>{quantity}</p>
        <Fab
          size="small"
          color="secondary"
          aria-label="add"
          onClick={() => increaseCartQuantity(item.id)}
        >
          <Add />
        </Fab>
      </PriceContainer>  
      <p>{formatCurrency(item.price * quantity)}</p>
      <IconButton
        onClick={() => removeFromCart(item.id)}
        color="primary"
        aria-label="delete item"
        component="span"
      >
        <Tooltip title="Remover Item">
          <DeleteForever />
        </Tooltip>
      </IconButton> */}
    </CardItem>
  );
}
