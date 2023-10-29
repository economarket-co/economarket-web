import { quicksand } from "@/fonts";
import Link from "next/link";

export default function LinkButton(props: { href: string, text: string }) {
    return (
        <Link
            href={props.href}
            className={`${quicksand.className} 
            bg-white px-6 py-3 font-semibold text-xs md:text-sm xl:text-xl
            rounded-md text-[#033E8C]`}>
            {props.text}
        </Link>
    )
}