import { Button } from "@nextui-org/react";

type PropsType = {
    provider: 'google' | 'facebook';
}
export default function SocialNetWorkButton(props: PropsType) {
    return (
        <Button
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