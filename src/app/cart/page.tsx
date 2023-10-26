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
import { formatCurrency } from "../utils";
import BasketCard from "@/components/cards/BasketCard";
import CartResume from "@/components/CartResume";
import CartTable from "@/components/CartTable";

export default function Cart() {
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
    const [notAvaibleCount, setNotAvaibleCount] = useState<number>(0);
    const [products, setProducts] = useState<ProductFull[]>([]);
    
    const [allInOnerMarket, setAllInOneMarket] = useState<boolean>(false);

    const [cartItemsBySuperMarket, setCartItemsBySuperMarket] = useState<any>([]);
    const [cheapestSupermarket, setCheapestSupermarket] = useState<SuperMarket | null>(null);

    useEffect(() => {
        getProducts(); // fetch products with updated prices
        // fetch products by supermarket
    }, [cartItems])

    useEffect(() => {
        getSupermarketsBasket();
        checkAvaibility();
    }, [products])

    async function checkAvaibility() {
        // counts products where productPrice is less thant 4
        const count = products.filter(product => product.productPrices.length < 4).length;

        setNotAvaibleCount(count);
    }

    async function getSupermarketsBasket() {
        const supermarkets = [SuperMarket.Exito, SuperMarket.Carulla, SuperMarket.Jumbo, SuperMarket.Olimpica];

        let cheapestSupermarket: SuperMarket | null = null;
        let cheapestPrice: number = Infinity;

        const basketBySupermarket = await Promise.all(supermarkets.map(async (supermarket) => {
            const productsOnMarket = await getItemsBySuperMarket(supermarket);

            const total = productsOnMarket.reduce((total, product) => {
                return total + (product ? product.price * product.quantity : 0);
            }, 0);

            if (total < cheapestPrice) {
                cheapestPrice = total;
                cheapestSupermarket = supermarket;
            }

            return {
                supermarket,
                image: `/images/supermarkets/${supermarket}.png`,
                products: productsOnMarket,
                total
            }
        }));

        // set cheapest supermarket
        setCartItemsBySuperMarket(basketBySupermarket);
        setCheapestSupermarket(cheapestSupermarket);
    }

    async function getItemsBySuperMarket(supermarket: SuperMarket) {
        let productsOnMarket = cartItems.map((product) => {
            // find product with updated values
            const productUpdated = products.find(p => p.id === product.product.id);

            if (!productUpdated) return null;

            // find product price on market
            const productOnMarket = productUpdated.productPrices.find(p => p.superMarket === supermarket);

            if (!productOnMarket) return null;

            return {
                ...productOnMarket,
                quantity: product.quantity,
                product: productUpdated,
                //@ts-ignore
                link: productUpdated['link' + supermarket]
            }
        }).filter(p => p !== null);

        return productsOnMarket;
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

                <CartTable cartItems={cartItems} notAvaibleCount={notAvaibleCount} />
                <CartResume cartItems={cartItems} notAvaibleCount={notAvaibleCount} />
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
                        {
                            cartItemsBySuperMarket.map((basket: any) => (
                                <BasketCard
                                    key={basket.supermarket}
                                    isBestOption={basket.supermarket === cheapestSupermarket}
                                    image={basket.image}
                                    cartProducts={basket.products}
                                    supermarket={basket.supermarket}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>

        </main>
    )
}