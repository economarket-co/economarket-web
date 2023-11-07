"use client";
import ProductCard from "@/components/cards/ProductsCard";
import Form from "@/components/forms/Form";
import Sales from "@/components/home/Sales";
import { uploadFilesFromClient } from "@/utils/uploadFilesFromClient";
import { Category, Offer } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import sales from "@/mock/sales.json";

export default function EditCategoryPage({ params }: any) {
    const [loading, setLoading] = useState(false);
    const [offer, setOffer] = useState<any>({ title: "", content: "", image: null, size: [], link: "" });

    const [offers, setOffers] = useState<any[]>([]);

    const [sizeOptions, setSizeOptions] = useState<any[]>([]);
    
    const [categorieList, setCategoriesList] = useState<any[]>([]);
    const [categories, setCategories] = useState([]);

    const fields = [
        {
            label: "Titulo", placeholder: "Ingresa el título del banner",
            isRequired: true, type: "text", value: offer.title,
            onChange: (value: any) => setOffer({ ...offer, title: value })
        },
        { label: "Descripción", placeholder: "Ingresa la descripción de la oferta", isRequired: true, type: "text", value: offer.content, onChange: (value: any) => setOffer({ ...offer, content: value }) },
        {
            label: "Tamaño", placeholder: "Selecciona el tamaño del banner", isRequired: true, type: "select", value: offer.size, options: sizeOptions, onChange: (value: any) => { setOffer({ ...offer, size: value }) }
        },
        { label: "Redireccionamiento", placeholder: "Selecciona la categoría de redireccionamiento", isRequired: true, type: "select", value: categories, options: categorieList, onChange: setCategories },
        { label: "Imagen", placeholder: "Selecciona una imagen", isRequired: true, type: "file", value: offer.image as File, onChange: (value: any) => setOffer({ ...offer, image: value }) },
    ]

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        setOffer({ ...offer, link: `/v1/products?category=${Array.from(categories)[0]}` })
    }, [categories])

    async function fetchData() {
        try {
            const response = await axios.get("/api/categories");

            const categoriesList = response.data.map((category: Category) => {
                return {
                    label: category.name,
                    value: category.id
                }
            });

            setCategoriesList(categoriesList)

            setSizeOptions([1, 2, 3, 4].map((size) => {
                return {
                    label: size,
                    value: size
                }
            }));

            const sales = await axios.get("/api/offers");

            const sale = await sales.data.filter((sale: Offer) => sale.id == params.id)[0];
            sale.size = new Set([sale.size])

            setOffer(sale);
            setOffers(sales.data)
        } catch (error) {
            console.error(error);
            toast.error("Error al obtener las categorías");
        }
    }

    async function handleSubmit(e: any) {
        e.preventDefault();

        setLoading(true);
        try {
            const body = {
                title: offer.title,
                content: offer.content,
                size: parseInt(Array.from(offer.size)[0] as string),
                link: offer.link,
                image: typeof offer.image === "string" ? offer.image : await uploadFilesFromClient('offers', offer.image as File)
            }

            axios.patch(`/api/offers/${params.id}`, body);

            toast.success("Oferta creada correctamente");
            window.location.href = "/admin/offers";
        } catch (error) {
            console.error(error);
            toast.error("Error al crear el producto");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="flex flex-col gap-8 ">
            <Form
                title="Agregar Producto"
                fields={fields}
                handleSubmit={handleSubmit}
                loading={loading}
            />

            <Sales
                sales={
                    [{
                        ...offer,
                        image: typeof offer.image === "string" ? offer.image : offer.image ? URL.createObjectURL(offer.image) : "",
                        size: Array.from(offer.size)[0] || 1
                    }]
                }
            />

        </main>
    )
}