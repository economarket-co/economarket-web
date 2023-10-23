'use client';
import { handleSignInWithProvider } from "@/utils/handleSignin";
import { Button } from "@nextui-org/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type PropsType = {
    provider: 'google' | 'facebook';
}
export default function SocialNetWorkButton(props: PropsType) {  
    return (
        <Button
            onPress={(e) => handleSignInWithProvider(props.provider)}
            variant="bordered"
            className="py-[17px]"
            startContent={
                <img
                    width="30"
                    height="30" 
                    src={`/icons/${props.provider}.svg`}
                />
            }
        >
            Inicia Sesión con {props.provider}
        </Button>
    )
}