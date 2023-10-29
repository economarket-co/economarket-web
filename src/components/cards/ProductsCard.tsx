"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import AddToCartButton from "../buttons/AddToCartButton";
import { ProductFull } from "@/odt/Product/productFull";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { quicksand } from "@/fonts";

type ProductCardProps = {
    product: ProductFull,
}

export default function ProductCard(props: ProductCardProps) {
    const productPrice = props.product.productPrices2[0];
    const avaible = (productPrice?.priceCarulla || productPrice?.priceExito || productPrice?.priceJumbo || productPrice?.priceOlimpica);
    const [isFavorite, setIsFavorite] = useState(props.product.favorites.length > 0);
    const [loading, setLoading] = useState(false);

    async function handleAddFavorite() {
        setLoading(true);
        setIsFavorite(!isFavorite);

        try {
            if (!isFavorite) {
                await axios.post('/api/favorites', {
                    productId: props.product.id,
                })
            } else {
                await axios.delete('/api/favorites', {
                    data: {
                        productId: props.product.id,
                    }
                })
            }
        } catch (error) {
            console.log(error);
            toast.error("Ha ocurrido un error")
        }

        setLoading(false);
    }

    return (
        <Card className='w-[230px] border shrink-0' style={{ boxShadow: "0px 2px 12px 0px rgba(0, 0, 0, 0.25)" }}>
            <CardBody className='relative p-0 h-[224px] border-b'>
                <img className='h-full object-fill' src={props.product.image} alt={props.product.name} />
                <motion.button
                    disabled={loading}
                    onClick={handleAddFavorite}
                    className="absolute right-4 top-4"
                    // animate={{ scale: isFavorite ? 1.2 : 1, 
                    //     transition: { duration: 0.2}
                    // }}    
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {
                        isFavorite ?
                            <img src={`/icons/favorite.svg `} alt="" className={``} />
                            :
                            <img src={`/icons/heart.svg `} alt="" className={``} />
                    }
                </motion.button>
            </CardBody>
            <CardFooter className='flex flex-col gap-2 px-4 items-start overflow-x-hidden'>
                {/* <Tooltip content={props.product.name} placement="bottom"> */}
                <p className={`${quicksand.className} text-xs text-[#343434] overflow-clip`}>{props.product.name}</p>
                {/* </Tooltip> */}
                <p className={`${quicksand.className} text-xs text-[#646464] `}>{props.product.unit}</p>
                <div className="flex gap-2">
                    <img src='/icons/price-tag.svg' />
                    <p className={`${quicksand.className} text-xs text-[#646464]`}>
                        {
                            `${productPrice?.priceCarulla ? 'Carulla, ' : ''} 
                            ${productPrice?.priceExito ? 'Éxito, ' : ''} 
                            ${productPrice?.priceJumbo ? 'Jumbo,' : ''} 
                            ${productPrice?.priceOlimpica ? 'Olimpica' : ''}`
                        }
                    </p>
                </div>
                <AddToCartButton
                    product={props.product}
                    quantity={1}
                />
            </CardFooter>
        </Card>
    )
}