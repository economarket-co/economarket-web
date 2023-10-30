"use client";
import BasicTable from "@/components/tables/Table";
import { Input } from "@nextui-org/react";
import { Card } from "@tremor/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function SubCategories() {
    const [subCategories, setSubCategories] = useState<any[]>([]);
    const [subCategoryName, seSubCategoryName] = useState("");

    const colums = [
        { name: "Nombre", key: "name" },
        { name: "Categoría", key: "category.name"}
    ]

    useEffect(() => {
        fetchData();
    }, [subCategoryName]);

    async function fetchData() {
        try {
            const response = await axios.get("/api/subCategories", {
                params: {
                    name: subCategoryName
                }
            });

            setSubCategories(response.data);
        } catch (error) {
            console.error(error);
            toast.error("Error al obtener los productos");
        }
    }

    return (
        <main className="w-full">
            <div className="flex flex-col gap-4">
                <Card className="flex justify-between">
                    <Input
                        value={subCategoryName}
                        onChange={(e) => seSubCategoryName(e.target.value)}
                        classNames={{
                            base: "max-w-full sm:max-w-[10rem] md:max-w-[20rem] h-8",
                            mainWrapper: "h-8",
                            input: "text-small",
                            inputWrapper: "h-8 font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                        }}
                        placeholder="Busca por nombre"
                        size="md"
                        startContent={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        }
                        type="search"
                    />
                </Card>
                <BasicTable
                    title="Sub Categoría"
                    columns={colums}
                    data={subCategories}
                    entity="subCategories"
                    allowControls={true}
                    allowActions={true}
                    setData={setSubCategories}
                />
            </div>
        </main>
    )
}