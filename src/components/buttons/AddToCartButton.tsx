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

    return (
        <button 
            onClick={e => addToCart(product, props.quantity)}
            className={`bg-[#01CC5E] text-white w-full rounded-md flex gap-2 items-center justify-center py-2 px-4
                text-[9px] lg:text-[14px] xl:text-xl font-medium
            `}
        >
            <span>Agregar</span> <img src="/icons/add-to-shopping-cart.svg" className="w-3 h-3 lg:w-4 lg:h-4" />
        </button>
    )
}