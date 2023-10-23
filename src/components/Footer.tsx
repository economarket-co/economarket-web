"use client";
import { Button, Input } from "@nextui-org/react"

export default function Footer() {
    return (
        <div className="flex flex-col lg:flex-row w-full justify-center items-center bg-[#033E8C] gap-28 py-12 justify-self-end self-end">
            <div className="flex flex-col gap-4">
                <img src='/icons/logo.png' alt="Logo" className="w-[150px] h-[75px]" />

                <p className="text-white max-w-[200px]">Tu mejor opción para economizar sin dejar de comprar lo que necesitas</p>
            </div>

            <div className="text-white flex flex-col gap-3">
                <h4 className="font-semibold">Contáctanos</h4>

                <div className="flex flex-col gap-2">
                    <SocialLInk href="https://wa.me/573006724574" content="3006724574" icon="/icons/whatsapp.svg" />
                    <SocialLInk href="mailto:economarket@gmail.com" content="@economarket" icon="/icons/email.svg" />
                    <SocialLInk href="mailto:economarket@gmail.com" content="economarket@gmail.com" icon="/icons/browser.svg" />
                </div>


            </div>

            <div className="w-[280px] md:w-[400px] flex flex-col gap-6 text-white">
                <div>
                    <h4 className="text-lg font-semibold">Recibe actualizaciones siguiendo nuestro News Letter</h4>
                    <p className="text-sm font-thin">Dejanos tu información y nosotros nos escargamos del resto</p>
                </div>

                <form className="flex flex-col lg:flex-row gap-2">
                    <Input type="text" placeholder="Correo electrónico" />
                    <Button color="success" className="text-white py-[10px] px-[30px]">Suscribete</Button>
                </form>
            </div>
        </div>
    )
}

function SocialLInk(props: { href: string, content: string, icon: string }) {
    return (
        <a href={props.href} className="text-white flex gap-2">
            <img src={props.icon} alt="Whatsapp" className="w-[30px] h-[30px] text-white" />
            <span>{props.content}</span>
        </a>
    )
}