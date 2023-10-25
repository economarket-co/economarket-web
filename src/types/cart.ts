import { Cart } from "@prisma/client";
import { cartItemWithProduct } from "./cartItem";

export type CartFull = Cart & {
    cartItems: cartItemWithProduct[];
}