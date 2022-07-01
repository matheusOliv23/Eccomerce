import { Drawer, Theme, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useShopCart } from "../../contexts/ShopCart/ShopCartContext";
import CartItem from "../CartItem/CartItem";
import { ProductsRequest } from "../../models/Products";
import { api } from "../../services/api";
import { formatCurrency } from "../utilities/formatCurrency";

type CartProps = {
  isOpen: any;
  setIsOpen: any;
};
const useStyles = makeStyles((theme: Theme) => createStyles({}));
export default function ShoppingCart({ isOpen, setIsOpen }: CartProps) {
  const classes = useStyles();
  const { cartItems } = useShopCart();

  const [products, setProducts] = useState<ProductsRequest>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/products");

      setProducts(response.data);
    };

    fetchData();
  }, []);

  const handleCloseOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const totalPrice = cartItems.reduce((total, cartItem) => {
    const item = products?.products.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  return (
    <Drawer
      sx={{ width: 800 }}
      anchor="right"
      open={isOpen}
      onClose={handleCloseOpenMenu}
    >
      {totalPrice > 0 && (
        <Typography variant="h5">Carrinho de Compras</Typography>
      )}

      {cartItems.map((item) => (
        <CartItem products={products} key={item.id} {...item} />
      ))}
      {totalPrice > 0 && (
        <Typography variant="h6">
          {" "}
          Total: {formatCurrency(totalPrice)}
        </Typography>
      )}
    </Drawer>
  );
}
