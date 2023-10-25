"use client";
import { CreateCardItem } from "@/odt/CardItem/createCardItem.odt";
import { cardItemWithProduct } from "@/types/cartItem";
import { createContext, useEffect, useState } from "react";

type CartContextType = {
  cartItems: cardItemWithProduct[], 
  addToCart: (item: CreateCardItem) => void, 
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
    console.log(cartItems)
  }, [cartItems])
  
  const addToCart = (item: CreateCardItem) => {
    const itsInCart = cartItems.find((i) => i.product.id === item.product.id);

    //@ts-ignore
    if (!itsInCart) return setCartItems([...cartItems, item]);

    const itemIndex = cartItems.findIndex((i) => i.product.id === item.product.id);

    if (itemIndex >= 0) {
      const updatedItems = [...cartItems];
      updatedItems[itemIndex].quantity += item.quantity;
      updatedItems[itemIndex].id += itemIndex;
      return setCartItems(updatedItems);
    }
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