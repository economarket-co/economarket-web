"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ProductCard from "@/components/cards/ProductsCard";
import ProductsFilter from "@/components/filters/ProductsFilter";
import { Select, SelectItem, Spinner } from "@nextui-org/react";
import HeroWithBg from "@/components/HeroWithBg";
import { ProductFull } from "@/odt/Product/productFull";

export default function ProductsPage({ searchParams }: any) {
    const [products, setProducts] = useState<ProductFull[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const [categories, setCategories] = useState<string[]>([]);
    const [superMarkets, setSupermarkets] = useState<[]>([]);
    const [priceRange, setPriceRange] = useState<number>(0);

    const [categoriesList, setCategoriesList] = useState<[]>([]);
    const [supermarketsList, setSupermarketsList] = useState<[]>([]);

    useEffect(() => {
        fetchFilters();
    }, [])

    useEffect(() => {
        fetchData();
    }, [categories, superMarkets, priceRange])

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
            const res = await axios.get('/api/favorites', {
                headers: {
                    'Content-Type': 'application/json'
                },
                params: {
                    categories: categories.length > 0 ? categories.join(',') : undefined,
                    superMarkets: superMarkets.length > 0 ? superMarkets.join(',') : undefined,
                    priceRange: priceRange,
                    ids: searchParams.id,
                    category: searchParams.category
                }
            })

            // delete id from searchParams
            delete searchParams.category;
            delete searchParams.id;
            setProducts(res.data)
        } catch (error) {
            console.log(error)
            toast.error('Error al cargar los productos');
        }
        setLoading(false);
    }

    return (
        <main className="flex min-w-full flex-col overflow-hidden ">
            <HeroWithBg title="Productos" BgImage="/images/products/products-bg.png" />

            <div className="flex flex-col lg:flex-row w-full grow bg-[#F6F6F6]">
                <ProductsFilter
                    categoriesList={categoriesList}
                    categories={categories}
                    setCategories={setCategories}
                    supermarkets={superMarkets}
                    setSupermarkets={setSupermarkets}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    maxPrice={100000}
                />

                <div className="flex flex-col gap-10 items-center lg:items-start md:px-20 py-16 grow">
                    <div className="flex">
                        <h1 className="font-dmserif text-5xl text-center md:text-start md:text-6xl">Todos los productos</h1>
                    </div>

                    <div className="flex flex-wrap gap-10 justify-center md:justify-start">
                        {loading ?
                            <div className="flex w-full justify-center">
                                <Spinner size="lg" />
                            </div>
                            :
                            products.map(product =>
                                <ProductCard product={product} />
                            )
                        }
                    </div>
                </div>
            </div>

        </main>
    )
}

