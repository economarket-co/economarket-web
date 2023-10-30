"use client";

import Form from "@/components/forms/Form";
import { uploadFilesFromClient } from "@/utils/uploadFilesFromClient";
import axios from "axios";
import { useState, FormEvent } from "react";
import toast from "react-hot-toast";

export default function AddCategoryPage() {
    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const [image, setImage ] = useState<File>();
    const [loading, setLoading] = useState(false);

    const fields = [
        { label: "Nombre", placeholder: "Ingresa el nombre de la categoría", isRequired: true, type: "text", value: name, onChange: setName },
        { label: "Código de color", placeholder: "Ingresa el código hexadecimal del color", isRequired: true, type: "text", value: color, onChange: setColor },
        { label: "Imagén de la categoría", placeholder: "Ingresa la imagen de la categoría", isRequired: true, type: "file", value: image as File, onChange: setImage },
    ]

    async function handleAdd(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        try {
            const imagePath = await uploadFilesFromClient('categories', image as File);

            const body = {
                name,
                color,
                image: imagePath
            }   

            const response = await axios.post("/api/categories", body);
            toast.success("Categoría agregada correctamente");
            window.location.href = "/admin/categories";
        } catch (error) {
            console.error(error);
            toast.error("Error al agregar la categoría");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main>
            <Form
                title="Agregar categoría"
                fields={fields}
                handleSubmit={handleAdd}
                loading={loading}
            />
        </main>
    )
}