"use client";
import Form from "@/components/forms/Form";
import { uploadFilesFromClient } from "@/utils/uploadFilesFromClient";
import { Category } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function EditCategoryPage({ params }: any) {
    const [name, setName] = useState("");
    const [categoriesList, setCategoriesList] = useState<Category[]>([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    const fields = [
        {
            label: "Nombre", placeholder: "Ingresa el nombre de la sub categoría",
            isRequired: true, type: "text", value: name,
            onChange: (e: any) => setName(e)
        },
        { label: "Categoría", placeholder: "Selecciona una categoría", isRequired: true, type: "select", value: "", options: categoriesList, onChange: setCategories}
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
                category:  parseInt(Array.from(categories)[0])
            }

            axios.post(`/api/subCategories`, body);

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
                title="Agregar categoría"
                fields={fields}
                handleSubmit={handleSubmit}
                loading={loading}
            />
        </main>
    )
}