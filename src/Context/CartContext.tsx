"use client";
import { CreateCardItem } from "@/odt/CardItem/createCardItem.odt";
import { CartFull } from "@/types/cart";
import { cartItemWithProduct } from "@/types/cartItem";
import { Cart } from "@prisma/client";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

type CartContextType = {
  cartItems: cartItemWithProduct[],
  addToCart: (item: CreateCardItem, quantity: number) => void,
  removeFromCart: (id: number) => void
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => { },
  removeFromCart: () => { },
});

export default function CartProvider({ children }: any) {
  const [cart, setCart] = useState<CartFull>(); // [value, setValue
  const [cartItems, setCartItems] = useState<cartItemWithProduct[]>([]);

  useEffect(() => {
    const cart = localStorage.getItem("cart");

    if (cart) setCartItems(JSON.parse(cart));
  }, []);

  useEffect(() => {
    if (cartItems.length === 0) return;
    saveCart();
  }, [cartItems]);

  const addToCart = async (item: CreateCardItem, quantity: number) => {
    const itsInCart = cartItems.find((i) => i.product.id === item.product.id);

    //@ts-ignore
    if (!itsInCart) return setCartItems([...cartItems, item]);

    const itemIndex = cartItems.findIndex((i) => i.product.id === item.product.id);

    if (itemIndex >= 0) {
      const updatedItems = [...cartItems];
      updatedItems[itemIndex].quantity += quantity;
      updatedItems[itemIndex].id += itemIndex;

      if (updatedItems[itemIndex].quantity === 0) updatedItems.splice(itemIndex, 1);

      return setCartItems(updatedItems);
    }
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((i) => i.id !== id));
  };

  async function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }

  async function createCart() {
    if (!cart) {
      try {
        const response = await axios.post('/api/cart', {
          headers: {
            'Content-Type': 'application/json',
          }
        });

        localStorage.setItem("cart_id", response.data.id);
        setCart(response.data);
      } catch (error) {
        console.error(error);
        toast.error("Error al crear el carrito");
      }
    }
  }

  async function fetchCartData() {
    try {
      const cartId = localStorage.getItem("cart_id");

      if (!cartId) return;
      const response = await axios.get(`/api/cart/${cartId}`, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      setCart(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Error al obtener el carrito");
    }
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};