"use client";
import AddToCartButton from "@/components/buttons/AddToCartButton";
import ProductCard from "@/components/cards/ProductsCard";
import Form from "@/components/forms/Form";
import { quicksand } from "@/fonts";
import { uploadFilesFromClient } from "@/utils/uploadFilesFromClient";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { Category } from "@prisma/client";
import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function EditCategoryPage({ params }: any) {
    const [name, setName] = useState("");
    const [categoriesList, setCategoriesList] = useState<Category[]>([]);
    const [categories, setCategories] = useState([]);
    const [unit, setUnit] = useState("");
    const [quantityPerUnit, setQuantityPerUnit] = useState("");
    const [linkCarulla, setLinkCarulla] = useState("");
    const [linkExito, setLinkExito] = useState("");
    const [linkJumbo, setLinkJumbo] = useState("");
    const [linkOlimpica, setLinkOlimpica] = useState("");
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState<File>();
    const [offerCarulla, setOfferCarulla] = useState("");
    const [offerExito, setOfferExito] = useState("");
    const [offerJumbo, setOfferJumbo] = useState("");
    const [offerOlimpica, setOfferOlimpica] = useState("");

    const fields = [
        {
            label: "Nombre", placeholder: "Ingresa el nombre del producto",
            isRequired: true, type: "text", value: name,
            onChange: (e: any) => setName(e)
        },
        { label: "Categoria", placeholder: "Selecciona una categoría", isRequired: true, type: "select", value: categories, options: categoriesList, onChange: setCategories },
        { label: "Unidad de medida", placeholder: "Ingresa la unidad de medida ej: Gr, Ml etc...", isRequired: true, type: "text", value: unit, onChange: setUnit },
        { label: "Cantidad por unidad", placeholder: "Ingresa la cantidad por unidad", isRequired: true, type: "number", value: quantityPerUnit, onChange: setQuantityPerUnit },
        { label: "Link Carulla", placeholder: "Ingresa el link de Carulla", isRequired: true, type: "text", value: linkCarulla, onChange: setLinkCarulla },
        { label: "Link Exito", placeholder: "Ingresa el link de Exito", isRequired: true, type: "text", value: linkExito, onChange: setLinkExito },
        { label: "Link Jumbo", placeholder: "Ingresa el link de Jumbo", isRequired: true, type: "text", value: linkJumbo, onChange: setLinkJumbo },
        { label: "Link Olimpica", placeholder: "Ingresa el link de Olimpica", isRequired: true, type: "text", value: linkOlimpica, onChange: setLinkOlimpica },
        { label: "Imagen", placeholder: "Selecciona una imagen", isRequired: true, type: "file", value: image as File, onChange: setImage },
        { label: "Descuento Carulla", placeholder: "Ingresa el descuento de Carulla", isRequired: false, type: "number", value: offerCarulla, onChange: setOfferCarulla },
        { label: "Descuento Exito", placeholder: "Ingresa el descuento de Exito", isRequired: false, type: "number", value: offerExito, onChange: setOfferExito },
        { label: "Descuento Jumbo", placeholder: "Ingresa el descuento de Jumbo", isRequired: false, type: "number", value: offerJumbo, onChange: setOfferJumbo },
        { label: "Descuento Olimpica", placeholder: "Ingresa el descuento de Olimpica", isRequired: false, type: "number", value: offerOlimpica, onChange: setOfferOlimpica },
    ]

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await axios.get("/api/categories");

            const categoriesList = response.data.map((category: Category) => {
                return {
                    label: category.name,
                    value: category.id
                }
            });

            setCategoriesList(categoriesList);
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
                name,
                CategoryId: parseInt(Array.from(categories)[0]),
                unit,
                quantityPerUnit: parseInt(quantityPerUnit),
                linkCarulla,
                linkExito,
                linkJumbo,
                linkOlimpica,
                offerCarulla: offerCarulla != "0" ? parseInt(offerCarulla) : null,
                offerExito:  offerExito != "0" ? parseInt(offerExito) : null,
                offerJumbo: offerJumbo != "0" ? parseInt(offerJumbo) : null,
                offerOlimpica: offerOlimpica != "0" ? parseInt(offerOlimpica) : null,
                image: await uploadFilesFromClient('products', image as File)
            }

            const product = await axios.post(`/api/products`, body);

            toast.success("Producto creado correctamente");
            window.location.href = "/admin/products";
        } catch (error) {
            console.error(error);
            toast.error("Error al crear el producto");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="flex items-center gap-8 ">
            <Form
                title="Agregar Producto"
                fields={fields}
                handleSubmit={handleSubmit}
                loading={loading}
            />

            <ProductCard 
                
                product={
                    {   
                        id: 1,
                        name,
                        unit,
                        quantityPerUnit: parseInt(quantityPerUnit),
                        image: image ? URL.createObjectURL(image) : "",
                        linkCarulla: "",
                        linkExito: "",
                        linkJumbo: "",
                        linkOlimpica: "",
                        offerCarulla: parseInt(offerCarulla),
                        offerExito: parseInt(offerExito),
                        offerJumbo: parseInt(offerJumbo),
                        offerOlimpica: parseInt(offerOlimpica),
                        CategoryId: 1,
                        productPrices2: [],
                        favorites: [],
                        createdAt: new Date(),
                        updatedAt: new Date()
                    }
                }
                isForPreview
            />
        </main>
    )
}