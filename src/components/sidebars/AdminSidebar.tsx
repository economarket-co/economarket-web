"use client";
import { Card } from "@tremor/react";
import axios from "axios";
import Image from "next/image";
import toast from "react-hot-toast";

export default function AdminSideBar() { 
    async function handleSignout() {
        try {
            const res = await axios.post('/api/auth/signout');

            window.location.href = "/v1/auth/signin";
        } catch (error) {
            console.error(error);
            toast.error("Error al cerrar sesión");
        }
    }

    const adminLinks = [
        { name: 'Dashboard', icon: '/icons/home.svg', href: '/admin' },
        { name: 'Categorias', icon: '/icons/categories-admin.svg', href: '/admin/categories' },
        // { name: 'Sub categorias', icon: '/icons/sub-categories-admin.svg', href: '/admin/subCategories' },
        { name: 'Ofertas', icon: '/icons/reports.svg', href: '/admin/offers' },
        { name: 'Productos', icon: '/icons/products-admin.svg', href: '/admin/products' },
    ]

    return (
        <Card className="flex flex-col gap-16 h-[600px] w-[250px] border-y-0">
            <Image height={128} width={128} src="/images/logo.png" alt="logo" className="h-15" />

            <div className="flex flex-col gap-6 grow">
                {
                    adminLinks.map((link, index) => (
                        <Link key={index} name={link.name} icon={link.icon} href={link.href} />
                    ))
                }

            </div>

            <div className="flex flex-col gap-6 justify-self-end">
                <button onClick={handleSignout} className="flex gap-4 h-fit text-lg hover:text-blue-500 items-center">
                    <img src={"/icons/log-out.svg"} alt="home" className="h-5" />
                    Cerrar Sesión
                </button>
            </div>
        </Card>
    )
}

function Link(props: { name: string, icon: string, href: string }) {
    return (
        <a href={props.href} className="flex gap-4 h-fit text-lg hover:text-blue-500 items-center">
            <img src={props.icon} alt="home" className="h-5" />
            {props.name}
        </a>
    )
}
