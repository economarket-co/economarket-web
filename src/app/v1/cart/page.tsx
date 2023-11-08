'use client';
import { CartContext } from "@/Context/CartContext";
import { ProductFull } from "@/odt/Product/productFull";
import { Switch } from "@nextui-org/react";
import { ProductPrice2, SuperMarket } from "@prisma/client";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
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

            products = await getProductPrice(updatedCartItems, supermarket);

            let products_copy = [];

            for (const product of products) {
                products_copy.push({
                    ...product,
                    link: product.product['link' + supermarket],
                    price: product.product.productPrices2[0]['price' + supermarket]
                })
            }

            const total = products_copy.reduce((total: number, product: any) => {
                return total + (product.price * product.quantity);
            }, 0);

            baskets.push({
                supermarket,
                products: products_copy,
                image: `/images/supermarkets/${supermarket}.png`,
                total,
                isCheapest: false
            });
        }

        
        sortBaskets(baskets);

        baskets[0].isCheapest = baskets[0].total > 0 ? true : false;

        setCartItemsBySuperMarket(baskets);
    }

    async function sortBaskets(baskets: any[]) {
        return baskets.sort((a, b) => {
            const aAvailableProducts = a.products.filter((product: any) => product.avaible).length;
            const bAvailableProducts = b.products.filter((product: any) => product.avaible).length;

            if (aAvailableProducts > bAvailableProducts) {
                return -1;
            } else if (aAvailableProducts < bAvailableProducts) {
                return 1;
            } else {
                if (a.total > b.total) {
                    return 1;
                } else if (a.total < b.total) {
                    return -1;
                } else {
                    return 0;
                }
            }
        });
    }

    async function getProductPrice(updatedCartItems: any[], supermarket: SuperMarket) {
        if (!allInOnerMarket) {
            return updatedCartItems.map((item: any) => {
                if (!allInOnerMarket) {
                    return {
                        ...item,
                        avaible: item?.product?.productPrices2[0]['price' + supermarket] ? true : false
                    }
                }
            })
        }
        
        const products = updatedCartItems.filter((item: any) => {
            if (!item.product) return false;

            const price = item.product.productPrices2[0];

            if (!price) return false;

            return IsCheapestp(price, price['price' + supermarket]);
        });

        return products.map((item: any) => {
            return {
                ...item,
                avaible: true
            }
        })
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
            <div className="flex flex-col-reverse items-center px-4 xl:flex-row  gap-8 xl:items-start">

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
                                    <p className="text-[#9D9D9D]">Presiona el switch para seleccionar la mejor combinación precio, dividiendo tu compra en varios supermercados</p>
                                </>

                        }
                    </div>

                    <Switch isSelected={allInOnerMarket} onValueChange={setAllInOneMarket} />

                    <div className="flex flex-wrap px-6 gap-12 lg:gap-8 justify-center" id="comparaciones">
                        {
                            cartItemsBySuperMarket.map((basket: any, index: number) => {
                                return (<BasketCard
                                    key={`${basket.supermarket}-${index}`}
                                    isBestOption={!allInOnerMarket ? basket.isCheapest : false}
                                    image={basket.image}
                                    cartProducts={basket.products}
                                    supermarket={basket.supermarket}
                                />
                                )
                            }
                            )
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