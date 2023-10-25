'use client';
import { CartContext } from "@/Context/CartContext";
import { useContext } from "react";

export default function Cart() {
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

    return (
        <main className="flex bg-[#EDEDED] min-w-full flex-col items-center overflow-hidden py-10">
            <div className="flex flex-col gap-4 bg-white w-[600px] rounded-xl px-10 py-4 font-quicksand text-[#646464]">
                <div className="flex justify-between font-semibold">
                    <p>Producto</p>
                    <p>Cantidad</p>
                </div>

                <div className="flex flex-col gap-4 divide-x ">
                    {
                        cartItems.map(item => (
                            <div className="flex items-center justify-between font-medium">
                                <div className="flex gap-3 items-center">
                                    <img src={item.product.image} alt={item.product.image} className="w-8" />
                                    <p>{item.product.name}</p>
                                </div>
                                <div className="flex gap-4 text-xl items-cente text-[#01CC5E]">
                                    {
                                        item.quantity === 1 ?
                                            <button onClick={e => removeFromCart(item.id)}><img src="/icons/trash.svg" alt="eliminar" className="h-7" /></button>
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
        </main>
    )
}