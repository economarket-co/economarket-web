"use client";
import CategoryCard from "@/components/cards/CategoryCard";
import Form from "@/components/forms/Form";
import { uploadFilesFromClient } from "@/utils/uploadFilesFromClient";
import { Category } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function EditCategoryPage({ params }: any) {
    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const [image, setImage] = useState<File>();
    const [loading, setLoading] = useState(true);

    const fields = [
        {
            label: "Nombre", placeholder: "Ingresa el nombre de la categoría",
            isRequired: true, type: "text", value: name,
            onChange: (e: any) => setName(e)
        },
        { label: "Código de color", placeholder: "Ingresa el código hexadecimal del color", isRequired: true, type: "text", value: color, onChange: setColor },
        { label: "Imagén de la categoría", placeholder: "Ingresa la imagen de la categoría", isRequired: true, type: "file", value: image as File, onChange: setImage },
    ]

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const { id } = params;

        setLoading(true)
        try {
            const response = await axios.get(`/api/categories/${id}`);

            setName(response.data.name);
            setColor(response.data.color);
            setImage(response.data.image);
        } catch (error) {
            console.error(error);
            toast.error("Error al obtener la categoría");
        } finally {
            setLoading(false);
        }
    }

    async function handleSubmit(e: any) {
        e.preventDefault();

        setLoading(true);
        try {
            const body = {
                name,
                color,
                image:typeof image === 'string' ? image :await uploadFilesFromClient('products', image as File)
            }

            axios.patch(`/api/categories/${params.id}`, body);

            toast.success("Categoría editada correctamente");
            window.location.href = "/admin/categories";
        } catch (error) {
            console.error(error);
            toast.error("Error al editar la categoría");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="flex justify-center items-start gap-8">
            <Form
                title="Editar categoría"
                fields={fields}
                handleSubmit={handleSubmit}
                loading={loading}
            />

            <div className="mt-10">
                <CategoryCard
                    id={1}
                    img={typeof image === 'string' ? image as string : image ? URL.createObjectURL(image as File) : ""}
                    title={name}
                    color={color}
                />
            </div>
        </main>
    )
}