"use client";
import HeroWithBg from "@/components/HeroWithBg";
import SearchBar from "@/components/SearchBar";
import AddToCartButton from "@/components/buttons/AddToCartButton";
import ProductCard from "@/components/cards/ProductsCard";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { useState } from "react";
import { formatCurrency } from "../utils";


export default function Comparator() {
    const [product, setProduct] = useState<any>(null);

    const oferts = [
        {
            img: '/images/supermarkets/olimpica.png',
            price: 5000,
            unit: 'Gramo',
            quantityPerUnit: 500,
        },
        {
            img: '/images/supermarkets/jumbo.png',
            price: 5000,
            unit: 'Gramo',
            quantityPerUnit: 500,
        },
        {
            img: '/images/supermarkets/carulla.png',
            price: 5000,
            unit: 'Gramo',
            quantityPerUnit: 500,
        },
        {
            img: '/images/supermarkets/exito.png',
            price: 5000,
            unit: 'Gramo',
            quantityPerUnit: 500,
        }
    ]

    return (
        <main className="flex min-w-full flex-col overflow-hidden ">
            <HeroWithBg title="Comparador de precios" BgImage="/images/comparator/comparator-bg.png" />

            <div className="flex flex-col items-center py-20 gap-7 min-h-screen px-4">
                <div className="flex flex-col gap-3 text-center">
                    <h2 className="font-quicksand text-3xl font-semibold">Escoge un producto y  compáralo en nuestros supermercado</h2>
                    <p className="font-quicksand text-lg font-medium text-[#646464]">Suma productos y descubre la manera más conveniente de comprarlos</p>
                </div>

                <SearchBar setProduct={setProduct} nonNavbar />

                {
                    product &&
                    <div className="flex flex-col lg:flex-row gap-8 mt-10">
                        <div className="flex flex-col gap-6">
                            <img
                                src={product.img}
                                className="rounded-lg h-[490px]"
                                alt={product.Descripcion}
                                style={{ boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.25)" }}
                            />
                            <AddToCartButton />
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className="font-quicksand text-2xl text-[#646464]">{product.Descripcion}</p>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-5">
                                {
                                    oferts.map(ofert =>
                                        <SuperMarketCard
                                            name={product.Descripcion}
                                            img={ofert.img}
                                            price={ofert.price}
                                            unit={ofert.unit}
                                            quantityPerUnit={ofert.quantityPerUnit}
                                            unitPrice={ofert.price / ofert.quantityPerUnit}
                                        />
                                    )
                                }
                            </div>
                        </div>
                    </div>

                }
            </div>
        </main>
    )

    type SuperMarketCardProps = {
        name: string,
        img: string,
        price: number
        unit: string,
        quantityPerUnit: number,
        unitPrice: number
    }
    function SuperMarketCard(props: SuperMarketCardProps) {
        return (
            <Card className="w-full lg:w-[200px] xl:w-[320px]">
                <CardBody className="p-0">
                    <img src={props.img} className="h-[110px] object-fill" alt="olimpica" />
                </CardBody>
                <CardFooter className="flex flex-col gap-2">
                    <p className="font-quicksand text-3xl font-medium">{formatCurrency(props.price)}</p>
                    <p className="font-quicksand text-lg text-[#646464]">{props.quantityPerUnit}</p>
                    <p className="font-quicksand text-lg text-[#646464]">{props.unit} a {formatCurrency(props.unitPrice)}</p>
                </CardFooter>
            </Card>
        )
    }
}