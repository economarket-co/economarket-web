"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ProductCard from "@/components/cards/ProductsCard";
import ProductsFilter from "@/components/ProductsFilter";
import { Spinner } from "@nextui-org/react";

export default function ProductsPage() {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const [categories, setCategories] = useState<[]>([]);
    const [supermarkets, setSupermarkets] = useState<[]>([]);
    const [priceRange, setPriceRange] = useState<number>(0);

    const [categoriesList, setCategoriesList] = useState<[]>([]);

    useEffect(() => {
        fetchFilters();
    }, [])

    useEffect(() => {
        fetchData();
    }, [categories, supermarkets, priceRange])

    async function fetchFilters() {
        try {
            const res = await axios.get('/api/categories');

            setCategoriesList(res.data);
        } catch (error) {
            console.error(error);
            toast.error('Error al cargar las categorías');
        }
    }

    async function fetchData() {
        setLoading(true);
        try {
            const res = await axios.get('/api/products', {
                headers: {
                    'Content-Type': 'application/json'
                },
                params: {
                    categories: categories.join(''),
                    supermarkets: supermarkets.join(''),
                    priceRange: priceRange
                }
            })
            setProducts(res.data)
        } catch (error) {
            console.log(error)
            toast.error('Error al cargar los productos');
        }
        setLoading(false);
    }

    return (
        <main className="flex min-w-full flex-col overflow-hidden ">
            <div className='flex flex-col flex-items justify-center text-white relative py-16 overflow-hidden'>
                <img src="/images/products/products-bg.png" className='absolute min-w-full min-h-full max-w-full -z-10' />

                <div className="flex gap-4 items-center text-white divide-x-2 px-16">
                    <h1 className="font-dmserif text-6xl max-w-[200px]">Productos</h1>
                </div>
            </div>

            <div className="flex">
                <ProductsFilter
                    categoriesList={categoriesList}
                    categories={categories}
                    setCategories={setCategories}
                    supermarkets={supermarkets}
                    setSupermarkets={setSupermarkets}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    maxPrice={100000}
                />
                <div className="flex flex-col gap-10 px-20 py-16">
                    <h1 className="font-dmserif text-6xl">Todos los productos</h1>

                    <div className="flex flex-wrap gap-10 justify-start">
                        {loading ?
                            <div className="flex w-full justify-center">
                                <Spinner size="lg"/>
                            </div>
                            :
                            products.map(product =>
                                <ProductCard name={product.Descripcion} img={product.img} unidad={"500 Gr"} companies={["Éxito, Carulla, Olímpica, Jumbo"]} />
                            )
                        }
                    </div>
                </div>
            </div>

        </main>
    )
}

