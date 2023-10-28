'use client';
import { CartContext } from "@/Context/CartContext";
import { ProductFull } from "@/odt/Product/productFull";
import { cartItemWithProduct } from "@/types/cartItem";
import { Button, Switch } from "@nextui-org/react";
import { CartItem, ProductPrice2, SuperMarket } from "@prisma/client";
import axios from "axios";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { formatCurrency } from "../utils";
import BasketCard from "@/components/cards/BasketCard";
import CartResume from "@/components/CartResume";
import CartTable from "@/components/CartTable";
import SuggestionsSection from "@/components/SuggestionsSection";

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
    }, [products, allInOnerMarket])

    async function checkAvaibility() {
        // counts products where productPrice is less thant 4
        const count = products.filter(product => {
            const price = product.productPrices2[0];

            if (!price) return true;

            return !price.priceCarulla || !price.priceExito || !price.priceJumbo || !price.priceOlimpica;
        });

        setNotAvaibleCount(count.length);
    }

    async function getSupermarketsBasket() {
        const supermarkets = [SuperMarket.Exito, SuperMarket.Carulla, SuperMarket.Jumbo, SuperMarket.Olimpica];

        const updatedCartItems: any = []

        for (const item of cartItems) {
            const product = products.find(p => p.id === item.product.id);

            updatedCartItems.push({
                ...item,
                product
            });
        };


        const baskets: any[] = [];
        for (const supermarket of supermarkets) {
            let products = [];

            switch (supermarket) {
                case SuperMarket.Exito:
                    products = updatedCartItems.filter((item: any) => {
                        if (!allInOnerMarket) {
                            return item?.product?.productPrices2[0].priceExito
                        }

                        //check if product is cheaper in another supermarket
                        const product = item.product.productPrices2[0];
                        return IsCheapestp(product, product.priceExito);

                    });
                    break;
                case SuperMarket.Carulla:
                    products = updatedCartItems.filter((item: any) => {
                        if (!allInOnerMarket) {
                            return item?.product?.productPrices2[0].priceCarulla
                        }

                        //check if product is cheaper in another supermarket
                        const product = item.product.productPrices2[0];
                        return IsCheapestp(product, product.priceCarulla);
                    });
                    break;
                case SuperMarket.Jumbo:
                    products = updatedCartItems.filter((item: any) => {
                        if (!allInOnerMarket) {
                            return item?.product?.productPrices2[0].priceJumbo
                        }

                        //check if product is cheaper in another supermarket
                        const product = item.product.productPrices2[0];
                        return IsCheapestp(product, product.priceJumbo) && product.priceJumbo;

                    });

                    break;
                case SuperMarket.Olimpica:
                    products = updatedCartItems.filter((item: any) => {
                        if (!allInOnerMarket) {
                            return item?.product?.productPrices2[0].priceOlimpica
                        }

                        //check if product is cheaper in another supermarket
                        const product = item.product.productPrices2[0];
                        return IsCheapestp(product, product.priceOlimpica);
                    });
                    break;
            }

            for (const product of products) {
                product.link = product.product['link' + supermarket];
                product.price = product.product.productPrices2[0]['price' + supermarket];
            }

            baskets.push({
                supermarket,
                products,
                image: `/images/supermarkets/${supermarket}.png`
            });
        }

        setCartItemsBySuperMarket(baskets);
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
            <div className="flex flex-col-reverse items-center px-4 xl:flex-row  gap-8 lg:items-start">

                <CartTable cartItems={cartItems} notAvaibleCount={notAvaibleCount} />
                <CartResume cartItems={cartItems} notAvaibleCount={notAvaibleCount} />
            </div>


            <div className="bg-white w-full py-10">
                <div className="flex flex-col items-center text-center gap-8">
                    <h3 className="font-dmserif text-5xl">Compara los precios</h3>

                    <div className="flex flex-col gap-3 font-quicksand font-medium">
                        {
                            !allInOnerMarket ?
                                <>
                                    <p className="text-lg text-[#434343]">Comprando todo en el mismo supermercado</p>
                                    <p className="text-[#9D9D9D]">Presiona el switch para ver los precios dividiendo la compra por supermercados</p>
                                </>
                                :
                                <>
                                    <p className="text-lg text-[#434343]">Dividiendo tus compras en supermercados</p>
                                    <p className="text-[#9D9D9D]">Presiona el switch para ver el precio de toda la compra en cada supermercado</p>
                                </>

                        }
                    </div>

                    <Switch isSelected={allInOnerMarket} onValueChange={setAllInOneMarket} />

                    <div className="flex flex-wrap gap-12 lg:gap-8 justify-center" id="comparaciones">
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

            <SuggestionsSection />

        </main>
    )
}

function IsCheapestp(productPrices: ProductPrice2, price: number) {
    const cheapest = Math.min(
        productPrices.priceCarulla ? productPrices.priceCarulla : Infinity,
        productPrices.priceExito ? productPrices.priceExito : Infinity,
        productPrices.priceJumbo ? productPrices.priceJumbo : Infinity,
        productPrices.priceOlimpica ? productPrices.priceOlimpica : Infinity
    );

    if (cheapest === price) {
        return true;
    }

    return false;
}