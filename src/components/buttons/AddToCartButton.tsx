"use client";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/Context/CartContext";
import { Product } from "@prisma/client";
import { CreateCardItem } from "@/odt/CardItem/createCardItem.odt";
import { motion } from "framer-motion";
import { RestaurantRounded } from "@mui/icons-material";

type AddToCartButtonProps = {
    priceId?: number,
    quantity: number,
    product: Product,
    isForPreview?: boolean
}

export default function AddToCartButton(props: AddToCartButtonProps) {
    const { addToCart, cartItems } = useContext(CartContext);
    const [item, setItem] = useState<any>(null);
    const [hover, setHover] = useState(false);

    const product: CreateCardItem = {
        product: props.product,
        quantity: props.quantity,
        priceId: props.priceId
    }

    useEffect(() => {
        if (props.isForPreview) return;
        const item = cartItems.find(item => item.product.id === props.product.id);
        setItem(item);
    }, [cartItems])

    return (
        <motion.button
            onMouseEnter={e => setHover(true)}
            onMouseLeave={e => setHover(false)}
            onClick={e => item ? null : addToCart(product, props.quantity)}
            className={`w-full rounded-md flex gap-2 items-center justify-center py-2 px-4
                text-[9px] lg:text-[14px] xl:text-xl font-medium
            `}
            style={{ boxShadow: "0px 2px 12px 0px rgba(0, 0, 0, 0.25)", backgroundColor: item ? "white" : "#01CC5E", color: item ? "#01CC5E" : "white" }}
            transition={{ duration: 0.3 }}
            whileHover={{
                backgroundColor: "white",
                color: "#01CC5E",
                scale: 1.05,
            }}
        >   {
                item ?
                    <div className="flex justify-between items-center w-full">
                        <motion.img
                            src="/icons/add-to-cart-green.svg"
                            className="w-6 h-6"
                            animate={{ translateX: [100, 0] }}
                            transition={{ duration: 0.6 }}
                        />

                        <motion.div
                            className="flex gap-4 text-[#01CC5E] text-[20px] "
                            animate={{ opacity: [0, 1] }}
                            transition={{ duration: 2 }}
                        >
                            <button onClick={e => addToCart(item, -1)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={e => addToCart(item, 1)}>+</button>
                        </motion.div>
                        <div>

                        </div>
                    </div>
                    :
                    <>
                        <span className="text-base">Agregar</span>
                        {
                            hover ?
                                <motion.img
                                    src="/icons/add-to-cart-green.svg"
                                    className="w-6 h-6"
                                    animate={{ translateX: [100, 0] }}
                                    transition={{ duration: 0.6 }}
                                /> :
                                <motion.img
                                    src="/icons/add-to-shopping-cart.svg"
                                    className="w-6 h-6"
                                    animate={{ translateX: [100, 0] }}
                                    transition={{ duration: 0.6 }}
                                />
                        }
                        {/*<img src="/icons/add-to-shopping-cart.svg" className="hover:text-[#01CC5E]" /> */}
                    </>
            }

        </motion.button>
    )
}