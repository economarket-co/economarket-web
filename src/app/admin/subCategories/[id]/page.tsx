"use client";
import Form from "@/components/forms/Form";
import { Selection } from "@nextui-org/react";
import { Category } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function EditCategoryPage({ params }: any) {
    const [name, setName] = useState("");
    const [categoriesList, setCategoriesList] = useState<Category[]>([]);
    const [categories, setCategories] = useState<Selection>(new Set([]));
    const [loading, setLoading] = useState(false);

    const fields = [
        {
            label: "Nombre", placeholder: "Ingresa el nombre de la sub categoría",
            isRequired: true, type: "text", value: name,
            onChange: (e: any) => setName(e)
        },
        { label: "Categoría", placeholder: "Selecciona una categoría", isRequired: true, type: "select", value: categories, options: categoriesList, onChange: setCategories}
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

            const subCategory = await axios.get(`/api/subCategories/${params.id}`);

            setName(subCategory.data.name);
            setCategories(new Set([subCategory.data.category.id.toString()]));

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
                // @ts-ignore
                categoryId:  parseInt(Array.from(categories)[0])
            }

            axios.patch(`/api/subCategories/${params.id}`, body);

            toast.success("Sub Categoría editada correctamente");
            window.location.href = "/admin/subCategories";
        } catch (error) {
            console.error(error);
            toast.error("Error al editar la Sub Categoría");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main>
            <Form
                title="Editar Sub Categoría"
                // @ts-ignore
                fields={fields}
                handleSubmit={handleSubmit}
                loading={loading}
            />
        </main>
    )
}