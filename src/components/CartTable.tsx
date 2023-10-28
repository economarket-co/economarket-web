"use client";
import { CartContext } from "@/Context/CartContext";
import { quicksand } from "@/fonts";
import { cartItemWithProduct } from "@/types/cartItem"
import Link from "next/link";
import { useContext } from "react";

type CartTableProps = {
    cartItems: cartItemWithProduct[],
    notAvaibleCount: number
}
export default function CartTable(props: CartTableProps) {
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

    return (
        <div className={`flex flex-col gap-4 bg-white w-[90%]  md:w-[600px] max-h-[800px] overflow-y-auto rounded-xl px-10 py-4 ${quicksand.className}text-[#646464]`}>
            {
                cartItems.length > 0  ?
                    <>
                        <div className="flex justify-between font-semibold">
                            <p>Producto</p>
                            <p>Cantidad</p>
                        </div>

                        <div className="flex flex-col gap-3 divide-y">
                            {
                                props.cartItems.map((item, index) => (
                                    <div key={index} className="flex gap-8 items-center justify-between font-medium py-3">
                                        <div className="flex gap-4 items-center">
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
                    </>
                    : 
                    <div className="flex flex-col gap-8 py-16 text-center justify-center items-center">
                        <h3 className={`${quicksand.className} font-semibold text-[#434343]`}>¡Empieza a agregar productos!</h3>
                        <p className={`${quicksand.className} font-medium text-[#646464]`}>Suma productos y descubre la manera más conveniente de comprarlos</p>

                        <Link href="/products" className="bg-[#01CC5E] text-white px-4 py-2 rounded-md">ver todos los productos</Link>
                    </div>
            }

        </div>
    )
}