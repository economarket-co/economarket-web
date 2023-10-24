import { Button } from "@nextui-org/react";

export default function AddToCartButton() {
    return (
        <Button className="bg-[#01CC5E] text-white w-full rounded-md" endContent={<img src="/icons/add-to-shopping-cart.svg" />}>Agregar</Button>
    )
}