"use client";
import {CartContext} from "@/Context/CartContext";
import { cartItemWithProduct } from "@/types/cartItem"
import { useContext } from "react";

type CartTableProps = {
    cartItems: cartItemWithProduct[],
    notAvaibleCount: number
}
export default function CartTable(props: CartTableProps) {
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

    return (
        <div className="flex flex-col gap-4 bg-white w-[600px] max-h-[800px] overflow-y-auto rounded-xl px-10 py-4 font-quicksand text-[#646464]">
            <div className="flex justify-between font-semibold">
                <p>Producto</p>
                <p>Cantidad</p>
            </div>

            <div className="flex flex-col gap-3 divide-y">
                {
                    props.cartItems.map((item, index) => (
                        <div key={index} className="flex items-center justify-between font-medium py-3">
                            <div className="flex gap-3 items-center">
                                <img src={item.product.image} alt={item.product.image} className="h-12" />
                                <p>{item.product.name}</p>
                            </div>
                            <div className="flex gap-4 text-xl items-cente text-[#01CC5E] shrink-0">
                                {
                                    item.quantity === 1 ?
                                        <button onClick={e => removeFromCart(item.product.id)}><img src="/icons/trash.svg" alt="eliminar" className="h-4 w-4" /></button>
                                        :
                                        <button onClick={e => addToCart(item, -1)}>-</button>
                                }
                                <p>{item.quantity}</p>
                                <button onClick={e => addToCart(item, 1)}>+</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}