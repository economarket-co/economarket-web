'use client';

import CategoryCard from "@/components/cards/CategoryCard";
import LinkButton from "@/components/buttons/LinkButton";
import { Category } from '@prisma/client';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { dmserif, quicksand } from "@/fonts";
import { Divider } from "@nextui-org/react";

export default function Categories() {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    async function fetchCategories() {
        try {
            const res = await axios.get('/api/categories');
            setCategories(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="flex min-w-full flex-col overflow-hidden ">
            <div className='flex flex-col flex-items justify-center text-white relative py-8 md:py-16 overflow-hidden'>
                <img src="/images/categories/categories-bg.png" className='absolute min-w-full min-h-full max-w-full -z-10' />

                <div className="flex gap-3 items-center text-white px-4 md:px-16 md:gap-10">
                    <h1 className={`${dmserif.className} text-4xl md:text-6xl max-w-[140px] md:max-w-[200px] w-fit`}>Siempre frescos</h1>

                    <Divider orientation="vertical" className="bg-white" />

                    <p className={`${quicksand.className} text-lg md:text-3xl max-w-[300px] opacity-85`}>50% en verduras seleccionadas</p>
                </div>
            </div>

            <div className="flex flex-col px-10 gap-10 py-10">
                <div className="flex flex-col  text-center md:text-start gap-4">
                    <h1 className={`${dmserif.className} text-4xl md:text-6xl`}>Categorías</h1>

                    <p className={`${quicksand.className} text-lg md:text-xl`}>Los productos más buscados, organizados para ti </p>
                </div>

                <div className="flex justify-center md:justify-start gap-7 flex-wrap">
                    {
                        categories.map((category, index) => (
                            <CategoryCard
                                key={index}
                                id={category.id}
                                title={category.name}
                                img={category.image}
                                color={category.color}
                            />
                        ))
                    }
                </div>
            </div>

            <div className={`
                flex flex-col text-start gap-6
                md:flex-row md:justify-between md:items-center lg:text-start
                text-white relative py-2 md:py-8 xl:py-16 overflow-hidden`
            }
            >
                <img src="/images/categories/categories-bg-2.png" className='absolute min-w-full min-h-full max-w-full -z-10' />

                <div className="py-4 flex flex-col gap-4  md:flex-row md:justify-between md:items-center lg:text-start">
                    <div className={`${quicksand.className} px-4 md:px-8 text-sm md:text-xl lg:text-3xl`}>
                        <p className="">Estás buscando algo más?</p>
                        <p>Mira todos los productos que manejamos!</p>
                    </div>

                    <div className="px-4 md:px-10">
                        <LinkButton href="/v1/products" text="Ver todos los productos" />
                    </div>
                </div>
            </div>
        </main>
    )
}