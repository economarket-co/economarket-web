"use client";
import { Button } from "@nextui-org/react";
import { useContext } from "react";
import { CartContext } from "@/Context/CartContext";
import { Product, ProductPrice } from "@prisma/client";

type AddToCartButtonProps = {
    priceId?: number,
    quantity: number,
    product: Product
}

export default function AddToCartButton(props: AddToCartButtonProps) {
    const { addToCart } = useContext(CartContext);

    return (
        <Button 
            onPress={e => addToCart({ ...props })}
            className="bg-[#01CC5E] text-white w-full rounded-md" 
            endContent={<img src="/icons/add-to-shopping-cart.svg" />}>Agregar</Button>
    )
}