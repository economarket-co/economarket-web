'use client';

import { Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { ProductFull } from "@/odt/Product/productFull";
import { quicksand } from "@/fonts";

type SearchBarProps = {
    nonNavbar?: boolean
    setProduct?: any
}

export default function SearchBar(props: SearchBarProps) {
    const [productName, setProductName] = useState('');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        handleSearch(productName);
    }, [productName])

    async function handleSearch(productName: string) {
        try {
            if (productName === '') return setProducts([]);
            const res = await axios.get(`/api/products`, {
                params: {
                    name: productName
                }
            });

            setProducts(res.data);
        } catch (error) {
            console.error(error);
            toast.error('Error al cargar los productos');
        }
    }

    async function handleClick(product: any) {
        setProducts([]);

        props.setProduct(product);
    }

    return (
        <div className={`w-full md:max-w-[550px] xl:max-w-[750px] relative `}>
            <Input
                value={productName}
                onValueChange={setProductName}
                className={`z-50 ${props.nonNavbar && 'shadow-lg'}`}
                classNames={{
                    base: "w-full  h-8 z-50",
                    mainWrapper: "h-10 z-50",
                    input: "text-xs md:text-base px-2",
                    inputWrapper: `h-8 xl:h-12 font-normal text-default-500 bg-white ${props.nonNavbar && 'border'}`
                }}
                placeholder="¿Qué producto estás buscando?"
                size="sm"
                startContent={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 md:w-4 md:h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                }
                type="search"
            />

            {
                (products.length > 0 && productName !== "") ?
                    <div className={`
                        absolute z-50 bg-white w-full divide-y-2 divide-gray-200 -mt-1
                        flex flex-col max-h-[400px] overflow-y-auto px-2 py-2 rounded-b-md shadow-md`
                    }
                    >
                        {
                            products.map((product: ProductFull) => (
                                props.setProduct ?
                                    <button
                                        onClick={e => handleClick(product)}
                                        key={product.id}
                                        className="flex gap-4 items-center py-2 hover:bg-gray-100"
                                    >
                                        <ProductContent img={product.image} name={product.name} />
                                    </button>
                                    :
                                    <a
                                        href={`/v1/comparator?productId=${product.id}`}
                                        key={product.id}
                                        className="flex gap-4 items-center py-2 hover:bg-gray-100"
                                    >
                                        <ProductContent img={product.image} name={product.name} />
                                    </a>
                            ))
                        }
                    </div> : null
            }

        </div>


    )

    function ProductContent(props: { img: string, name: string }) {
        return (
            <>
                <img src={props.img} className="w-14 h-14 object-cover" />
                <p className={`${quicksand.className} text-xs md:text-base text-content`}>{props.name}</p>
            </>
        )
    }
}