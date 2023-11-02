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
    const [subCategoriesList, setSubCategoriesList] = useState<Category[]>([]);
    const [categories, setCategories] = useState([]);
    const [unit, setUnit] = useState("");
    const [quantityPerUnit, setQuantityPerUnit] = useState("");
    const [linkCarulla, setLinkCarulla] = useState("");
    const [linkExito, setLinkExito] = useState("");
    const [linkJumbo, setLinkJumbo] = useState("");
    const [linkOlimpica, setLinkOlimpica] = useState("");
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState<File>();

    const fields = [
        {
            label: "Nombre", placeholder: "Ingresa el nombre del producto",
            isRequired: true, type: "text", value: name,
            onChange: (e: any) => setName(e)
        },
        { label: "Sub Categoria", placeholder: "Selecciona una sub categoría", isRequired: true, type: "select", value: categories, options: subCategoriesList, onChange: setCategories },
        { label: "Unidad de medida", placeholder: "Ingresa la unidad de medida ej: Gr, Ml etc...", isRequired: true, type: "text", value: unit, onChange: setUnit },
        { label: "Cantidad por unidad", placeholder: "Ingresa la cantidad por unidad", isRequired: true, type: "number", value: quantityPerUnit, onChange: setQuantityPerUnit },
        { label: "Link Carulla", placeholder: "Ingresa el link de Carulla", isRequired: true, type: "text", value: linkCarulla, onChange: setLinkCarulla },
        { label: "Link Exito", placeholder: "Ingresa el link de Exito", isRequired: true, type: "text", value: linkExito, onChange: setLinkExito },
        { label: "Link Jumbo", placeholder: "Ingresa el link de Jumbo", isRequired: true, type: "text", value: linkJumbo, onChange: setLinkJumbo },
        { label: "Link Olimpica", placeholder: "Ingresa el link de Olimpica", isRequired: true, type: "text", value: linkOlimpica, onChange: setLinkOlimpica },
        { label: "Imagen", placeholder: "Selecciona una imagen", isRequired: true, type: "file", value: image as File, onChange: setImage }
    ]

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        console.log(image)
    }, [image])


    async function fetchData() {
        try {
            const response = await axios.get("/api/subCategories");

            const categoriesList = response.data.map((category: Category) => {
                return {
                    label: category.name,
                    value: category.id
                }
            });

            setSubCategoriesList(categoriesList);
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
                subCategoryId: parseInt(Array.from(categories)[0]),
                unit,
                quantityPerUnit: parseInt(quantityPerUnit),
                linkCarulla,
                linkExito,
                linkJumbo,
                linkOlimpica,
                image: await uploadFilesFromClient('products', image as File)
            }

            axios.post(`/api/products`, body);

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

            <Card className='w-[150px] lg:w-[230px] border shrink-0' style={{ boxShadow: "0px 2px 12px 0px rgba(0, 0, 0, 0.25)" }}>
                <CardBody className='relative p-0 h-[112px] lg:h-[224px] border-b'>
                    <img className='h-full object-fill' src={`${image ? URL.createObjectURL(image) : ''}`} alt={name} />
                </CardBody>
                <CardFooter className='flex flex-col gap-2 px-4 items-start overflow-x-hidden'>
                    {/* <Tooltip content={props.product.name} placement="bottom"> */}
                    <p className={`${quicksand.className} text-[9px] lg:text-xs text-[#343434] overflow-clip`}>{name}</p>
                    {/* </Tooltip> */}
                    <p className={`${quicksand.className} text-xs text-[#646464] `}>{quantityPerUnit} {unit}</p>
                    <div className="flex gap-2">
                        <img src='/icons/price-tag.svg' />
                        <p className={`${quicksand.className} text-[9px] lg:text-xs text-[#646464]`}>
                            Carrulla, Exito, Olimpica, Jumbo
                        </p>
                    </div>
                    
                    <AddToCartButton
                        //@ts-ignore
                        product={null}
                        quantity={1}
                    />
                </CardFooter>
            </Card>
        </main>
    )
}