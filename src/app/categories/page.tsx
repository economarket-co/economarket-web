'use client';

import CategoryCard from "@/components/cards/CategoryCard";
import LinkButton from "@/components/buttons/LinkButton";
import { Category } from '@prisma/client';
import axios from 'axios';
import { useState, useEffect } from 'react';

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
            <div className='flex flex-col flex-items justify-center text-white relative py-16 overflow-hidden'>
                <img src="/images/categories/categories-bg.png" className='absolute min-w-full min-h-full max-w-full -z-10' />

                <div className="flex md:gap-4 items-center text-white divide-x-2 px-4 md:px-16">
                    <h1 className="font-dmserif text-4xl md:text-6xl max-w-[200px]">Siempre frescos</h1>

                    <p className="font-quicksand px-4 text-lg md:text-3xl max-w-[300px] opacity-85">50% en verduras seleccionadas</p>
                </div>
            </div>

            <div className="flex flex-col px-10 gap-10 py-10">
                <div className="flex flex-col gap-4">
                    <h1 className="font-dmserif text-4xl md:text-6xl">Categorías</h1>

                    <p className="font-quicksand text-lg md:text-xl">Los productos más buscados, organizados para ti </p>
                </div>

                <div className="flex justify-center gap-7 flex-wrap">
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

            <div className={`flex flex-col justify-around items-center text-center gap-6
                lg:flex-row lg:text-start
                text-white relative py-16 overflow-hidden`
            }
            >
                <img src="/images/categories/categories-bg-2.png" className='absolute min-w-full min-h-full max-w-full -z-10' />

                <div className="font-dmserif text-xl md:text-2xl lg:text-3xl">
                    <p className="">Estás buscando algo más?</p>
                    <p>Mira todos los productos que manejamos!</p>
                </div>

                <LinkButton href="/products" text="Ver todos los productos" />
            </div>
        </main>
    )
}