'use client';
import { CartContext } from "@/Context/CartContext";
import { ProductFull } from "@/odt/Product/productFull";
import { cartItemWithProduct } from "@/types/cartItem";
import { Button } from "@nextui-org/react";
import { CartItem, SuperMarket } from "@prisma/client";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Cart() {
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
    const [notAvaibleCount, setNotAvaibleCount] = useState<number>(0);
    const [products, setProducts] = useState<ProductFull[]>([]);

    useEffect(() => {
        getProducts(); // fetch products with updated prices
    }, [cartItems])

    useEffect(() => {
        checkAvaibility();
    }, [products])

    async function checkAvaibility() {
        // counts products where productPrice is less thant 4
        console.log(products);
        const count = products.filter(product => product.productPrices.length < 4).length;

        setNotAvaibleCount(count);
    }

    async function getProducts() {
        try {
            const response = await axios.get('/api/products', {
                headers: {
                    'Content-Type': 'application/json'
                },
                params: {
                    ids: cartItems.map(item => item.product.id).join(',')
                }
            });

            setProducts(response.data);
        } catch (error) {
            console.error(error);
            toast.error('Error al cargar los productos');
        }
    }

    return (
        <main className="flex bg-[#EDEDED] min-w-full flex-col items-center overflow-hidden py-10">
            <div className="flex gap-8">

                <div className="flex flex-col gap-4 bg-white w-[600px] rounded-xl px-10 py-4 font-quicksand text-[#646464]">
                    <div className="flex justify-between font-semibold">
                        <p>Producto</p>
                        <p>Cantidad</p>
                    </div>

                    <div className="flex flex-col gap-3 divide-y">
                        {
                            cartItems.map(item => (
                                <div className="flex items-center justify-between font-medium py-3">
                                    <div className="flex gap-3 items-center">
                                        <img src={item.product.image} alt={item.product.image} className="h-12" />
                                        <p>{item.product.name}</p>
                                    </div>
                                    <div className="flex gap-4 text-xl items-cente text-[#01CC5E]">
                                        {
                                            item.quantity === 1 ?
                                                <button onClick={e => removeFromCart(item.id)}><img src="/icons/trash.svg" alt="eliminar" className="h-4" /></button>
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

                <div className="rounded-xl px-14 divide-y bg-white flex flex-col py-10 w-[400px] gap-2 font-quicksand">
                    <h2 className="text-[#646464]">Resumen de compra</h2>

                    <div className="flex flex-col gap-6 pt-3 text-[#9D9D9D]">
                        <p>Tienes {cartItems.length} items en tu carrito.</p>

                        {
                            notAvaibleCount > 0 ?
                                <p>Hay {notAvaibleCount} productos no se encuentran en algunos supermercados. Revisa las listas y verifica que las alternativas sean de tu agrado.</p>

                                :
                                <p>Todos los productos seleccionados se encuentran disponibles en todos los supermercados</p>
                        }

                        <Button color="success" className="text-white ">Ver comparaciones</Button>
                    </div>
                </div>

            </div>
        </main>
    )
}