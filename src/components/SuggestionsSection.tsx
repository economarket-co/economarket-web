"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProductCard from "./cards/ProductsCard";
import { ProductFull } from "@/odt/Product/productFull";
import { quicksand } from "@/fonts";

export default function SuggestionsSection() {
    const [productsSuggestion, setProductsSuggestion] = useState<ProductFull[]>([]);

    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        fetchProductSuggestions();
    }, [])

    async function fetchProductSuggestions() {
        try {
            const res = await axios.get('/api/products', {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            setProductsSuggestion(res.data)
        } catch (error) {
            console.log(error)
            toast.error('Error al cargar los productos');
        }
        setLoading(false);
    }

    return (
        <div className="flex flex-col gap-6 bg-[#F6F6F6] w-[100vw] px-4 md:px-20 py-20">

            <h4 className={`${quicksand.className} text-[#434343] text-xl md:text-3xl font-medium px-4`}>Productos que te pueden interesar</h4>
            <div className="flex gap-4 overflow-x-scroll p-4">
                {
                    productsSuggestion.map((product) => (
                        <ProductCard 
                            key={product.id}
                            product={product}
                        />
                    ))
                }
            </div>
        </div>
    )
}