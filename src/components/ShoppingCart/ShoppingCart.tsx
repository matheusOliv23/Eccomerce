import { Drawer, Theme, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useShopCart } from "../../contexts/ShopCart/ShopCartContext";
import CartItem from "../CartItem/CartItem";
import { ProductsRequest } from "../../models/Products";
import { api } from "../../services/api";
import { formatCurrency } from "../utilities/formatCurrency";
import { Cart } from "./styles";
import Modal from "../Modal";

import { ThemeProvider } from "styled-components";
import { theme } from "src/styles/theme";

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
    <Modal open={isOpen} onClose={handleCloseOpenMenu} title="Meu Carrinho">
      {/* <Cart>       
        {totalPrice > 0 && <h3>Carrinho de Compras</h3>}
        teste
        {cartItems.map((item) => (
          <CartItem products={products} key={item.id} {...item} />
        ))}
        {totalPrice > 0 && <h3> Total: {formatCurrency(totalPrice)}</h3>}
      </Cart> */}
    </Modal>
    // <ThemeProvider theme={theme}>
    //   <Drawer
    //     sx={{
    //       //overflow: "auto",
    //       zIndex: 9999999999999999,
    //       // maxHeight: "10rem",
    //       // height: "100%",
    //       // boxShadow: "20px 20px 50px rgba(0, 0, 0, 0.5)",
    //     }}
    //     PaperProps={{ sx: { width: 500, background: "black" } }}
    //     anchor="right"
    //     open={isOpen}
    //     onClose={handleCloseOpenMenu}
    //     ModalProps={{
    //       keepMounted: true, // Better open performance on mobile.
    //     }}
    //   >
    //     <Cart>
    //       {totalPrice > 0 && <p>Carrinho de Compras</p>}
    //       teste
    //       {cartItems.map((item) => (
    //         <CartItem products={products} key={item.id} {...item} />
    //       ))}
    //       {totalPrice > 0 && <p> Total: {formatCurrency(totalPrice)}</p>}
    //     </Cart>
    //   </Drawer>
    // </ThemeProvider>
  );
}
