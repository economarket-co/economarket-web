'use client';
import { CartContext } from "@/Context/CartContext";
import { ProductFull } from "@/odt/Product/productFull";
import { cartItemWithProduct } from "@/types/cartItem";
import { Button, Switch } from "@nextui-org/react";
import { CartItem, SuperMarket } from "@prisma/client";
import axios from "axios";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Cart() {
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
    const [notAvaibleCount, setNotAvaibleCount] = useState<number>(0);
    const [products, setProducts] = useState<ProductFull[]>([]);
    const [allInOnerMarket, setAllInOneMarket] = useState<boolean>(false);

    useEffect(() => {
        getProducts(); // fetch products with updated prices
    }, [cartItems])

    useEffect(() => {
        checkAvaibility();
    }, [products])

    async function checkAvaibility() {
        // counts products where productPrice is less thant 4
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
        <main className="flex bg-[#EDEDED] min-w-full flex-col gap-8 items-center overflow-hidden pt-10">
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

            <div className="bg-white w-full py-10">
                <div className="flex flex-col items-center text-center gap-8">
                    <h3 className="font-dmserif text-5xl">Compara los precios</h3>

                    <div className="flex flex-col gap-3 font-quicksand font-medium">
                        <p className="text-lg text-[#434343]">Comprando todo en el mismo supermercado</p>
                        <p className="text-[#9D9D9D]">Presiona el switch para ver los precios dividiendo la compra por supermercados</p>
                    </div>

                    <Switch isSelected={allInOnerMarket} onValueChange={setAllInOneMarket} />

                    <div className="flex flex-wrap gap-8 justify-center">
                        <BasketCard image="/images/supermarkets/exito.png" products={cartItems} supermarket={SuperMarket.Exito} />
                        <BasketCard image="/images/supermarkets/carulla.png" products={cartItems} supermarket={SuperMarket.Carulla} />
                        <BasketCard image="/images/supermarkets/jumbo.png" products={cartItems} supermarket={SuperMarket.Jumbo} />
                        <BasketCard image="/images/supermarkets/olimpica.png" products={cartItems} supermarket={SuperMarket.Olimpica} />
                    </div>
                </div>
            </div>

        </main>
    )

    function BasketCard(props: { image: string, products: cartItemWithProduct[], supermarket: SuperMarket }) {
        return (
            <div className="rounded-3xl overflow-hidden w-[300px] lg:w-[380px]"
                style={{ boxShadow: "0px 3.72755px 19.56966px 0px rgba(0, 0, 0, 0.25)" }}
            >
                <img src={props.image} alt={props.image} className="w-full h-[100px] object-fill" />

                <div className="flex flex-col gap-14 py-5 px-4">
                    <div className="flex flex-col gap-5 h-[300px] overflow-y-scroll">
                        {
                            props.products.map((product) => {
                                // find product with updated values
                                const productUpdated = products.find(p => p.id === product.product.id);

                                if (!productUpdated) return null;

                                // find product price on market
                                const productOnMarket = productUpdated.productPrices.find(p => p.superMarket === props.supermarket);
                                
                                if (!productOnMarket) return null;

                                return (
                                    <div key={product.id} className="flex justify-between items-center gap-4">
                                        <div className="flex gap-3 items-center ">
                                            <img src={product.product.image} alt="producto" className="h-12" />
                                            <p className="text-start">{product.product.name}</p>
                                        </div>

                                        <div className="flex gap-3 items-center">
                                            <p>{product.quantity}</p>
                                            <Link href="/products/1"><img src="/icons/external-link.svg" /></Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="flex flex-col gap-4 border-t-1 text-end py-4">
                        <p className="text-lg text-[#9D9D9D]">{props.products.length} productos de su lista</p>
                        <p className="font-quicksand text-3xl text-[#434343]">Total: $ 100.000</p>
                        <Button color="success" className="w-full text-white">Comprar</Button>
                    </div>

                </div>



            </div>
        )

    }
}