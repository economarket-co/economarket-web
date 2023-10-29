'use client';
import { handleSignInWithProvider } from "@/utils/auth";
import { Button } from "@nextui-org/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type PropsType = {
    provider: 'google' | 'facebook';
}
export default function SocialNetWorkButton(props: PropsType) {  
    return (
        <button
            onClick={(e) => handleSignInWithProvider(props.provider)}
            className="flex gap-2 border-2 rounded-2xl items-center font-poppins text-inputText px-5 py-[8px] text-xs md:text-sm lg:text-base"
        >
            <img
                width="30"
                height="30" 
                src={`/icons/${props.provider}.svg`}
            />
            Inicia sesión con {props.provider}
        </button>
    )
}