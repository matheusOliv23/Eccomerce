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
import CartModal from "../CartModal";

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
    // <CartModal isOpen={isOpen} onClose={handleCloseOpenMenu} />

    <Modal open={isOpen} onClose={handleCloseOpenMenu} title="Meu Carrinho">
      teste
    </Modal>

    // <Drawer
    //   sx={
    //     {
    //       //overflow: "auto",
    //       // zIndex: 9999999999999999,
    //       // maxHeight: "10rem",
    //       // height: "100%",
    //       // boxShadow: "20px 20px 50px rgba(0, 0, 0, 0.5)",
    //     }
    //   }
    //   anchor="right"
    //   open={isOpen}
    //   onClose={handleCloseOpenMenu}
    //   ModalProps={{
    //     keepMounted: true, // Better open performance on mobile.
    //   }}
    // >
    //   <Cart>
    //     {totalPrice > 0 && <p>Carrinho de Compras</p>}

    //     {cartItems.map((item) => (
    //       <CartItem products={products} key={item.id} {...item} />
    //     ))}
    //     {totalPrice > 0 && <p> Total: {formatCurrency(totalPrice)}</p>}
    //   </Cart>
    // </Drawer>
  );
}
