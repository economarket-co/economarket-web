"use client";
import { quicksand } from "@/fonts";
import { Button, Input } from "@nextui-org/react"
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Footer() {
    const [email, setEmail] = useState("");
    
    async function handleSubmit(e: any) {
        e.preventDefault();
        
        try {
            const res = await axios.post("/api/newsletter", { email });

            toast.success("Gracias por suscribirte");
        } catch (error) {
            toast.error("Ha ocurrido un error");
        }
    }

    return (
        <div className={`
            w-full  
            grid grid-cols-2  gap-5 md:gap-16 px-6 md:px-10 
            md:flex md:justify-center md:items-start lg:gap-28 py-12 
            bg-[#033E8C]  justify-self-end self-end`}
        >
            <div className="flex flex-col gap-4 md:mx-auto">
                <img src='/icons/logo.png' alt="Logo" className="w-[73px] h-[36px] md:w-[100px] md:h-[50px] lg:w-[150px] lg:h-[75px]" />

                <p className="text-xs md:text-sm lg:text-lg text-white max-w-[110px] md:max-w-[160px] lg:max-w[200px]">Tu mejor opción para economizar sin dejar de comprar lo que necesitas</p>
            </div>

            <div className="text-white flex flex-col gap-3 mx-auto text-xs md:text-base lg:text-lg">
                <h4 className={`${quicksand.className} font-semibold`}>Contáctanos</h4>

                <div className="flex flex-col gap-2 overflow-hidden">
                    <SocialLInk href="https://wa.me/573006724574" content="3006724574" icon="/icons/whatsapp.svg" />
                    <SocialLInk href="mailto:economarket@gmail.com" content="@economarket" icon="/icons/email.svg" />
                    <SocialLInk href="mailto:economarket@gmail.com" content="economarket@gmail.com" icon="/icons/browser.svg" />
                </div>


            </div>

            <div className="col-span-2 mx-auto flex flex-col gap-6 justify-start text-white">
                <div>
                    <h4 className="text-lg md:text-sm lg:text-2xl font-semibold">Recibe actualizaciones siguiendo nuestro News Letter</h4>
                    <p className="text-sm lg:text-lg font-thin">Dejanos tu información y nosotros nos escargamos del resto</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-2">
                    <Input 
                        value={email} 
                        onValueChange={setEmail} 
                        type="email" 
                        placeholder="Correo electrónico" 
                        className="text-black"
                    />

                    <Button 
                        type="submit" 
                        color="success" 
                        className="text-white py-[10px] px-[20px] lg:px-[30px]"
                    >
                        Suscribete
                    </Button>
                </form>
            </div>
        </div>
    )
}

function SocialLInk(props: { href: string, content: string, icon: string }) {
    return (
        <a href={props.href} className="text-white flex gap-2 items-center">
            <img src={props.icon} alt="Whatsapp" className="w-[30px] h-[30px] text-white" />
            <span>{props.content}</span>
        </a>
    )
}