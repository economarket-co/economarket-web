"use client";
import { CreateCardItem } from "@/odt/CardItem/createCardItem.odt";
import { cardItemWithProduct } from "@/types/cartItem";
import { createContext, useEffect, useState } from "react";

type CartContextType = {
  cartItems: cardItemWithProduct[], 
  addToCart: (item: CreateCardItem, quantity: number) => void, 
  removeFromCart: (id: number) => void
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => { },
  removeFromCart: () => { },
});

export default function CartProvider({ children }: any) {
  const [cartItems, setCartItems] = useState<cardItemWithProduct[]>([]);

  useEffect(() => {
    const cart = localStorage.getItem("cart");

    if (cart) {
      setCartItems(JSON.parse(cart));
    }
  }, []);

  useEffect(() => {
    if (cartItems.length === 0) return;
    saveCart();
  }, [cartItems]);
  
  const addToCart = (item: CreateCardItem, quantity: number) => {
    console.log(item);
    const itsInCart = cartItems.find((i) => i.product.id === item.product.id);

    //@ts-ignore
    if (!itsInCart) return setCartItems([...cartItems, item]);

    const itemIndex = cartItems.findIndex((i) => i.product.id === item.product.id);

    if (itemIndex >= 0) {
      const updatedItems = [...cartItems];
      updatedItems[itemIndex].quantity += quantity;
      updatedItems[itemIndex].id += itemIndex;

      if (updatedItems[itemIndex].quantity === 0 ) updatedItems.splice(itemIndex, 1);

      return setCartItems(updatedItems);
    }
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((i) => i.id !== id));
  };

  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};