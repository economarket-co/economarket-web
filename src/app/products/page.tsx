'use client';
import { Button, Card, CardBody, CardFooter, Tooltip } from "@nextui-org/react"

import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function ProductsPage() {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        try {
            const res = await axios.get('http://localhost:3000/api/products')
            setProducts(res.data)
        } catch (error) {
            console.log(error)
            toast.error('Error al cargar los productos');
        }
    }

    return (
        <main className="flex min-w-full flex-col overflow-hidden ">
            <div className='flex flex-col flex-items justify-center text-white relative py-16 overflow-hidden'>
                <img src="/images/products/products-bg.png" className='absolute min-w-full min-h-full max-w-full -z-10' />

                <div className="flex gap-4 items-center text-white divide-x-2 px-16">
                    <h1 className="font-dmserif text-6xl max-w-[200px]">Productos</h1>

                </div>
            </div>

            <div className="flex flex-col gap-10 px-20 py-16">
                <h1 className="font-dmserif text-6xl">Todos los productos</h1>

                <div className="flex flex-wrap gap-10 justify-start">
                    {
                        products.map(product =>
                            <ProductCard name={product.Descripcion} img={product.img} unidad={"500 Gr"} companies={["Éxito, Carulla, Olímpica, Jumbo"]} />

                        )
                    }
                </div>
            </div>
        </main>
    )

    type ProductCardProps = {
        name: string,
        img?: string,
        unidad: string,
        companies: string[],
    }

    function ProductCard(props: ProductCardProps) {
        return (
            <Card className='w-[220px] border' style={{ boxShadow: "0px 2px 12px 0px rgba(0, 0, 0, 0.25)" }}>
                <CardBody className='p-0 h-[190px] border-b'>
                    <img className='h-full object-fill' src={props.img} alt={props.name} />
                </CardBody>
                <CardFooter className='flex flex-col gap-2 px-4 items-start overflow-x-hidden'>
                    {/* <Tooltip content={props.name} placement="bottom"> */}
                    <p className='font-quicksand text-sm text-[#343434] overflow-clip'>{props.name}</p>
                    {/* </Tooltip> */}
                    <p className='font-quicksand text-xs text-[#646464] '>{props.unidad}</p>
                    <div className="flex gap-2">
                        <img src='/icons/price-tag.svg' /><p className='font-quicksand text-xs text-[#646464]'>Éxito, carulla, Olímpica, Jumbo</p>
                    </div>
                    <Button className="bg-[#01CC5E] text-white w-full rounded-md" endContent={<img src="/icons/add-to-shopping-cart.svg" />}>Agregar</Button>
                </CardFooter>
            </Card>
        )
    }
}

