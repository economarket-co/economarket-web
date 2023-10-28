"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ProductCard from "@/components/cards/ProductsCard";
import ProductsFilter from "@/components/filters/ProductsFilter";
import { Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner } from "@nextui-org/react";
import HeroWithBg from "@/components/HeroWithBg";
import { ProductFull } from "@/odt/Product/productFull";
import { Session, createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function ProductsPage({ searchParams }: any) {
    const [products, setProducts] = useState<ProductFull[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const [categories, setCategories] = useState<string[]>([]);
    const [superMarkets, setSupermarkets] = useState<[]>([]);
    const [maxPrice, setPriceRange] = useState<number>(0);

    const [categoriesList, setCategoriesList] = useState<[]>([]);
    const [supermarketsList, setSupermarketsList] = useState<[]>([]);

    const [session, setSession] = useState<Session | null>();
    useEffect(() => {
        fetchFilters();

    }, [])

    useEffect(() => {
        fetchData();
    }, [categories, superMarkets, maxPrice])

    async function fetchFilters() {
        try {
            const res = await axios.get('/api/categories');

            const supabase = createClientComponentClient();

            const { data } = await supabase.auth.getSession();

            setSession(data.session);

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
                    categories: categories.length > 0 ? categories.join(',') : undefined,
                    superMarkets: superMarkets.length > 0 ? superMarkets.join(',') : undefined,
                    maxPrice,
                    ids: searchParams.id,
                    category: searchParams.category,
                    favorites: true,
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
            {
                !session ?
                    <Modal isOpen={true}>
                        <ModalContent className="py-10">
                            <ModalHeader className="">
                                <p className="text-[#434343] text-4xl text-center w-full">:(</p>
                            </ModalHeader>

                            <ModalBody className="text-center">
                                <h3 className="font-quicksand text-[#434343] text-2xl font-bold">Ups! Parece que no has iniciado sesión</h3>
                                <p className="text-[#646464] font-quicksand text-lg">Ingresa a tu perfil para ver y guardar tus productos favoritos</p>
                            </ModalBody>

                            <ModalFooter className="flex justify-center">
                                <Link className="bg-[#033E8C] text-white py-2 px-8 rounded-lg text-lg" href="/auth/signin">Iniciar sesión</Link>
                            </ModalFooter>
                        </ModalContent>

                    </Modal>
                    :
                    <>

                        <HeroWithBg title="Favoritos" BgImage="/images/products/products-bg.png" />

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
                            />


                            {
                                products.length === 0 ?
                                    <div className="flex flex-col gap-12 w-full items-center justify-center grow py-24 px-4">
                                        <img src="/images/heart.svg" alt="corazon" />

                                        <div className="flex flex-col gap-3 text-center">
                                            <h3 className="font-semibold font-quicksand text-2xl text-[#434343]">No haz agregado nada aún</h3>
                                            <p className="font-quicksand font-medium text-lg text-[#646464]">Aprovecha tus favoritos para guardar productos que podrías comprar nuevamente</p>
                                        </div>

                                        <Link href="/products" className="bg-[#01CC5E] text-white text-center px-8 py-2 font-bold rounded-md">Empezar a agregar productos</Link>
                                    </div>
                                    :
                                    <div className="flex flex-col gap-10 items-center lg:items-start md:px-20 py-16 grow">
                                        <div className="flex">
                                            <h1 className="font-dmserif text-5xl text-center md:text-start md:text-6xl">Tus favoritos</h1>
                                        </div>

                                        <div className="flex flex-wrap gap-10 justify-center md:justify-start">
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
                            }

                        </div>
                    </>
            }


        </main>
    )
}

