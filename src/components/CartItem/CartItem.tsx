import { Add, DeleteForever, Remove } from "@mui/icons-material";
import { Card, Fab, Grid, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { useShopCart } from "../../contexts/ShopCart/ShopCartContext";
import { ProductsRequest } from "../../models/Products";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
  products: ProductsRequest | undefined;
};

export default function CartItem({ id, quantity, products }: CartItemProps) {
  const {
    cartItems,
    removeFromCart,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useShopCart();

  const item = products?.products.find((i) => i.id === id);
  if (item == null) return null;

  console.log(item);
  return (
    <Card sx={{ margin: "1rem", minHeight: "10rem", maxWidth: 600 }}>
      <Stack direction="column" spacing={4} sx={{ padding: "2rem" }}>
        <Grid container gap={4}>
          <img
            src={item.thumbnail}
            width={75}
            height={90}
            style={{ objectFit: "cover" }}
          />
          <Stack direction="column">
            <Typography>{item.title}</Typography>
            <Typography fontWeight="bold">
              {formatCurrency(item.price)}
            </Typography>

            <Stack direction="row" alignItems="center" spacing={3}>
              <Fab
                size="small"
                color="secondary"
                aria-label="remove"
                onClick={() => decreaseCartQuantity(item.id)}
              >
                <Remove />
              </Fab>
              <Typography>{quantity}</Typography>
              <Fab
                size="small"
                color="secondary"
                aria-label="add"
                onClick={() => increaseCartQuantity(item.id)}
              >
                <Add />
              </Fab>
            </Stack>
          </Stack>
          <Typography>{formatCurrency(item.price * quantity)}</Typography>
          <IconButton
            onClick={() => removeFromCart(item.id)}
            color="primary"
            aria-label="delete item"
            component="span"
          >
            <DeleteForever />
          </IconButton>
        </Grid>
      </Stack>
    </Card>
  );
}
