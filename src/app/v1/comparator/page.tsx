"use client";
import HeroWithBg from "@/components/HeroWithBg";
import SearchBar from "@/components/SearchBar";
import AddToCartButton from "@/components/buttons/AddToCartButton";
import { useEffect, useState } from "react";
import { SuperMarketCard } from "@/components/cards/SuperMarketCard";
import SuggestionsSection from "@/components/SuggestionsSection";
import { ProductFull } from "@/odt/Product/productFull";
import { ProductPrice, SuperMarket } from "@prisma/client";
import axios from "axios";
import toast from "react-hot-toast";
import { quicksand } from "@/fonts";


export default function Comparator({ searchParams }: any) {
    const [product, setProduct] = useState<ProductFull>();
    const [prices, setOferts] = useState<(ProductPrice | any)[]>([]);

    useEffect(() => {
        fetchProduct();
    }, [])

    useEffect(() => {
        if (!product) return;

        const superMarkets = [SuperMarket.Carulla, SuperMarket.Jumbo, SuperMarket.Olimpica, SuperMarket.Exito];

        const oferts = superMarkets.map(superMarket => {
            let price = null;

            switch (superMarket) {
                case SuperMarket.Carulla:
                    price = product.productPrices2[0].priceCarulla
                    break;
                case SuperMarket.Olimpica:
                    price = product.productPrices2[0].priceOlimpica
                    break;
                case SuperMarket.Exito:
                    price = product.productPrices2[0].priceExito
                    break;
                case SuperMarket.Jumbo:
                    price = product.productPrices2[0].priceJumbo
                    break;
                default:
                    price = null;
                    break;
            }

            return {
                superMarket,
                price
            }
        })

        setOferts(oferts);

    }, [product])

    async function fetchProduct() {
        const id = searchParams.productId;

        if (!id) return

        try {
            const product = await axios.get(`/api/products/${id}`, {
                params: {
                    ids: id
                }
            })

            setProduct(product.data);
        } catch (error) {
            console.error();
            toast.error('Error al cargar el producto');
        }
    }

    return (
        <main className="flex min-w-full flex-col overflow-hidden ">
            <HeroWithBg title="Comparador de precios" BgImage="/images/comparator/comparator-bg.png" />

            <div className="flex flex-col items-center px-4 py-20 gap-16 min-h-full grow">
                <div className="flex flex-col gap-3 text-center">
                    <h2 className={`${quicksand.className} text-xl md:text-3xl font-semibold`}>Escoge un producto y  compáralo en nuestros supermercado</h2>
                    <p className={`${quicksand.className} md:text-lg font-medium text-[#646464]`}>Suma productos y descubre la manera más conveniente de comprarlos</p>
                </div>

                <div className="flex flex-col items-center h-full gap-6">

                    <div className="w-[300px] md:w-[550px] lg:w-[700px]">
                        <SearchBar setProduct={setProduct} nonNavbar />
                    </div>

                    {

                        product &&
                        <div className="flex flex-col items-center xl:flex-row gap-8 mt-10">
                            <div className="flex flex-col gap-6">
                                <img
                                    src={product.image}
                                    className="rounded-lg h-[300px] lg:h-[490px] w-[300px] lg:w-[490px] object-fill"
                                    alt={product.name}
                                    style={{ boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.25)" }}
                                />
                                <AddToCartButton product={product} quantity={1} />
                            </div>

                            <div className="flex flex-col gap-4">
                                <p className={`${quicksand.className} text-center lg:text-st text-lg md:text-xl lg:text-2xl text-[#646464]`}>{product.name}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-5">
                                    {
                                        prices.map(ofert =>
                                            <SuperMarketCard
                                                key={ofert.superMarket}
                                                name={product.name}
                                                img={`/images/supermarkets/${ofert.superMarket}.png`}
                                                price={ofert.price}
                                                unit={product.unit}
                                                quantityPerUnit={product.quantityPerUnit}
                                                unitPrice={ofert ? ofert.price / product.quantityPerUnit : null}
                                            />
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    }
                </div>

                <SuggestionsSection />
            </div>
        </main>
    )
}