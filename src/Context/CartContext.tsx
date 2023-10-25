"use client";
import { CreateCardItem } from "@/odt/CardItem/createCardItem.odt";
import { cardItemWithProduct } from "@/types/cartItem";
import { createContext, useState } from "react";

type CartContextType = {
  cartItems: cardItemWithProduct[], 
  addToCart: (item: CreateCardItem) => void, 
  removeFromCart: (id: number) => void
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => { },
  removeFromCart: () => { },
});

export default function CartProvider({ children }: any) {
  const [cartItems, setCartItems] = useState<cardItemWithProduct[]>([]);

  const addToCart = (item: CreateCardItem) => {
    //@ts-ignore
    setCartItems((prevItems) => {
      const itsInCart = prevItems.find((i) => i.product.id === item.product.id);

      if (!itsInCart) return [...prevItems, item];

      // check if priceId is the same
      const priceIsTheSame = itsInCart.priceId === item.priceId;

      if (!priceIsTheSame) return [...prevItems, item];
      
      const itemIndex = prevItems.findIndex((i) => i.product.id === item.product.id);

      if (itemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += item.quantity;
        updatedItems[itemIndex].id += itemIndex;
        return updatedItems;
      }

      return [...prevItems, item];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((i) => i.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};