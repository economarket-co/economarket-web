"use client";
import HeroWithBg from "@/components/HeroWithBg";
import SearchBar from "@/components/SearchBar";
import AddToCartButton from "@/components/buttons/AddToCartButton";
import { useEffect, useState } from "react";
import { SuperMarketCard } from "@/components/cards/SuperMarketCard";
import SuggestionsSection from "@/components/SuggestionsSection";
import { ProductFull } from "@/odt/Product/productFull";
import { ProductPrice, SuperMarket } from "@prisma/client";


export default function Comparator() {
    const [product, setProduct] = useState<ProductFull>();

    const [prices, setOferts] = useState<(ProductPrice | any)[]>([]);

    useEffect(() => {
        if (!product) return;

        const superMarkets= [SuperMarket.Carulla, SuperMarket.Jumbo, SuperMarket.Olimpica, SuperMarket.Exito];

        const oferts = superMarkets.map(superMarket => {
            const price = product.productPrices.find(price => {
                return  price.superMarket === superMarket
            });

            return price ? price : { superMarket }
        });

        setOferts(oferts);
        
    }, [product])

    return (
        <main className="flex min-w-full flex-col overflow-hidden ">
            <HeroWithBg title="Comparador de precios" BgImage="/images/comparator/comparator-bg.png" />

            <div className="flex flex-col items-center pt-20 gap-16 min-h-screen px-4">
                <div className="flex flex-col gap-3 text-center">
                    <h2 className="font-quicksand text-3xl font-semibold">Escoge un producto y  compáralo en nuestros supermercado</h2>
                    <p className="font-quicksand text-lg font-medium text-[#646464]">Suma productos y descubre la manera más conveniente de comprarlos</p>
                </div>

                <div className="flex flex-col items-center gap-6">

                    <SearchBar setProduct={setProduct} nonNavbar />

                    {
                        product &&
                        <div className="flex flex-col lg:flex-row gap-8 mt-10">
                            <div className="flex flex-col gap-6">
                                <img
                                    src={product.image}
                                    className="rounded-lg h-[490px]"
                                    alt={product.name}
                                    style={{ boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.25)" }}
                                />
                                <AddToCartButton />
                            </div>

                            <div className="flex flex-col gap-4">
                                <p className="font-quicksand text-2xl text-[#646464]">{product.name}</p>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-5">
                                    {
                                        prices.map(ofert =>
                                            <SuperMarketCard
                                                name={product.name}
                                                img={`/images/supermarkets/${ofert.superMarket}.png`}
                                                price={ofert.price}
                                                unit={product.unit}
                                                quantityPerUnit={product.quantityPerUnit}
                                                unitPrice={ofert ? ofert.price / 1 : null}
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