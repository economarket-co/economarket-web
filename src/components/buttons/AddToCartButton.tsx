"use client";
import { Button } from "@nextui-org/react";
import { useContext } from "react";
import { CartContext } from "@/Context/CartContext";
import { Product, ProductPrice } from "@prisma/client";
import { CreateCardItem } from "@/odt/CardItem/createCardItem.odt";

type AddToCartButtonProps = {
    priceId?: number,
    quantity: number,
    product: Product
}

export default function AddToCartButton(props: AddToCartButtonProps) {
    const { addToCart } = useContext(CartContext);

    const product: CreateCardItem = {
        product: props.product,
        quantity: props.quantity,
        priceId: props.priceId
    }

    console.log(props);
    return (
        <Button 
            onPress={e => addToCart(product, props.quantity)}
            className="bg-[#01CC5E] text-white w-full rounded-md" 
            endContent={<img src="/icons/add-to-shopping-cart.svg" />}>Agregar</Button>
    )
}