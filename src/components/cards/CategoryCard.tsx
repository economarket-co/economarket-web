'use client';
import { dmserif } from "@/fonts";
import { Card, CardBody, CardFooter } from "@nextui-org/react"
import Link from "next/link";
import { useState } from "react";

type CategoryCardProps = {
    id: number,
    title: string,
    img: string,
    color?: string
}

export default function CategoryCard(props: CategoryCardProps) {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <Link href={`/v1/products/?category=${props.id}`}>
            <Card
                className={`
                hover:font-semibold cursor-pointer 
                hover:-translate-y-6 w-[100px] md:w-[150px] xl:w-[200px] h-[114px] md:h-[140px] xl:h-[180px]`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <CardBody className='p-0  h-[90px] lg:h-[180px] '>
                    <img className='h-full object-cover' src={props.img} alt={props.title} />
                </CardBody>
                <CardFooter
                    className='flex justify-center max-w-full h-[40px] lg:h-[70px]  '
                    style={{ backgroundColor: hovered ? "white" : props.color, color: hovered ? props.color : "white" }}
                >
                    <p className={`${dmserif.className} break-words text-xs lg:text-sm xl:text-xl text-center max-w-full`}>{props.title}</p>
                </CardFooter>
            </Card>
        </Link>
    )
}