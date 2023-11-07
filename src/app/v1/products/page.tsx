"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ProductCard from "@/components/cards/ProductsCard";
import ProductsFilter from "@/components/filters/ProductsFilter";
import { Select, SelectItem, Spinner } from "@nextui-org/react";
import HeroWithBg from "@/components/HeroWithBg";
import { ProductFull } from "@/odt/Product/productFull";
import { dmserif } from "@/fonts";
import SortButton from "@/components/buttons/SortButton";

export default function ProductsPage({ searchParams }: any) {
    const [products, setProducts] = useState<ProductFull[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const [categories, setCategories] = useState<string[]>([]);
    const [superMarkets, setSupermarkets] = useState<[]>([]);
    const [maxPrice, setPriceRange] = useState<number>(0);

    const [categoriesList, setCategoriesList] = useState<[]>([]);
    const [supermarketsList, setSupermarketsList] = useState<[]>([]);
    const [sort, setSort] = useState<string>('');

    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        fetchFilters();

        function handleResize() {
            setIsMobile(window.innerWidth < 1024);
        }

        setIsMobile(window.innerWidth < 1024);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [])

    useEffect(() => {
        fetchData();
    }, [categories, superMarkets, maxPrice, sort])

    async function fetchFilters() {
        try {
            const res = await axios.get('/api/categories');

            setCategoriesList(res.data);

            if (searchParams.category) {
                setCategories([searchParams.category]);
            }
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
                    categories: categories.length > 0 ? categories.join(',') : undefined,
                    superMarkets: superMarkets.length > 0 ? superMarkets.join(',') : undefined,
                    maxPrice: maxPrice,
                    ids: searchParams.id,
                    category: searchParams.category,
                    sort: sort
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
                    priceRange={maxPrice}
                    setPriceRange={setPriceRange}
                    maxPrice={100000}
                    setSort={setSort}
                />

                <div className="flex flex-col gap-10 items-center lg:items-start md:px-20 py-10 md:py-16 grow">
                    <div className="flex flex-col-reverse gap-4 md:flex-row justify-between w-full md:items-center lgpx-6">
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                            <button onClick={e => window.history.back()}>
                                <img src="/icons/back.svg" alt="back" className="w-6 md:w-10 h-6 md:h-10" />
                            </button>
                            <h1 className={`${dmserif.className} text-4xl text-start md:text-start md:text-5xl`}>Todos los productos</h1>
                        </div>

                        {/* todo: improve this */}
                        {
                            !isMobile && 
                            <SortButton
                                ascSort={() => setSort('name')}
                                descSort={() => setSort('favorites')}
                                recentSort={() => console.log('recent')}
                            />
                        }
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-10 md:justify-start">
                        {loading ?
                            <div className="flex w-full justify-center">
                                <Spinner size="lg" />
                            </div>
                            :
                            products.map(product =>
                                <ProductCard key={product.id} product={product} />
                            )
                        }
                    </div>
                </div>
            </div>

        </main>
    )
}

