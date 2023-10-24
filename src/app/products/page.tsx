'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ProductCard from "@/components/cards/ProductsCard";

export default function ProductsPage() {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        try {
            const res = await axios.get('http://localhost:3000/api/products')
            setProducts(res.data)
        } catch (error) {
            console.log(error)
            toast.error('Error al cargar los productos');
        }
    }

    return (
        <main className="flex min-w-full flex-col overflow-hidden ">
            <div className='flex flex-col flex-items justify-center text-white relative py-16 overflow-hidden'>
                <img src="/images/products/products-bg.png" className='absolute min-w-full min-h-full max-w-full -z-10' />

                <div className="flex gap-4 items-center text-white divide-x-2 px-16">
                    <h1 className="font-dmserif text-6xl max-w-[200px]">Productos</h1>

                </div>
            </div>

            <div className="flex flex-col gap-10 px-20 py-16">
                <h1 className="font-dmserif text-6xl">Todos los productos</h1>

                <div className="flex flex-wrap gap-10 justify-start">
                    {
                        products.map(product =>
                            <ProductCard name={product.Descripcion} img={product.img} unidad={"500 Gr"} companies={["Éxito, Carulla, Olímpica, Jumbo"]} />
                        )
                    }
                </div>
            </div>
        </main>
    )
}

