"use client";
import { poppins, quicksand } from "@/fonts";
import { Button, Input } from "@nextui-org/react"
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: any) {
        e.preventDefault();

        try {
            setLoading(true);
            const res = await axios.post("/api/newsletter", { email });

            toast.success("Gracias por suscribirte");
        } catch (error) {
            toast.error("Ha ocurrido un error");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className={`
            w-full  
            grid grid-cols-2  gap-5 md:gap-16 px-6 md:px-10 
            md:flex md:justify-center md:items-start lg:gap-12 py-6
            bg-[#033E8C]  justify-self-end self-end ${quicksand.className}`}
        >
            <div className="flex flex-col gap-4 md:mx-auto">
                <img src='/icons/logo.png' alt="Logo" className="w-[73px] h-[36px] md:w-[100px] md:h-[50px] lg:w-[100px] lg:h-[50px]" />

                <p className="text-xs md:text-sm lg:text-base text-white max-w-[110px] md:max-w-[160px] lg:max-w-[240px]">Tu mejor opción para economizar sin dejar de comprar lo que necesitas</p>
            </div>

            <div className="text-white flex flex-col gap-3 mx-auto text-xs lg:text-base">
                <h4 className={`${quicksand.className} font-semibold`}>Contáctanos</h4>

                <div className="flex flex-col gap-2 overflow-hidden">
                    <SocialLInk href="https://wa.me/573006724574" content="3006724574" icon="/icons/WhatsApp2.png" />
                    <SocialLInk href="mailto:economarket@gmail.com" content="@economarket" icon="/icons/email.png" />
                    <SocialLInk href="mailto:economarket@gmail.com" content="economarket@gmail.com" icon="/icons/browser.png" />
                </div>


            </div>

            <div className="col-span-2 mx-auto flex flex-col gap-6 justify-start text-white">
                <div>
                    <h4 className="text-xs lg:text-lg font-semibold">Recibe actualizaciones siguiendo nuestro News Letter</h4>
                    <p className="text-xs lg:text-base font-thin">Dejanos tu información y nosotros nos escargamos del resto</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-row gap-2 col-span-2 w-full">
                    <Input
                        value={email}
                        onValueChange={setEmail}
                        type="email"
                        placeholder="Correo electrónico"
                        className="text-black"
                    />

                    <button
                        disabled={loading}
                        type="submit"
                        className="text-white py-[10px] px-[20px] lg:px-[30px] bg-[#12A455] rounded-md font-semibold text-xs lg:text-base"
                    >
                        Suscribete
                    </button>

                </form>

                <p className={`w-[270px] lg:w-[400px] ${poppins.className} text-xs`}>
                    {`Al hacer click en "Registrate"`}, aceptas nuestros <a href="/v1/privacy" target="_blank" className="text-blue-400 font-medium">terminos y condiciones</a>
                </p>
            </div>
        </div>
    )
}

function SocialLInk(props: { href: string, content: string, icon: string }) {
    return (
        <a href={props.href} className="text-white flex gap-2 items-center">
            <img src={props.icon} alt="Whatsapp" className="w-[15px] h-[15px] md:w-[24px] md:h-[24px] lg:w-[30px] lg:h-[30px] text-white" />
            <span>{props.content}</span>
        </a>
    )
}