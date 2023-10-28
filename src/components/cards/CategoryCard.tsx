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
        <Link href={`/products/?category=${props.id}`}>
            <Card
                className='hover:font-semibold cursor-pointer hover:-translate-y-6'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <CardBody className='p-0 h-[190px] w-[200px]'>
                    <img className='h-full object-cover' src={props.img} alt={props.title} />
                </CardBody>
                <CardFooter
                    className='flex justify-center'
                    style={{ backgroundColor: hovered ? "white" : props.color, color: hovered ? props.color : "white" }}
                >
                    <p className={`${dmserif.className} text-xl text-center w-ful`}>{props.title}</p>
                </CardFooter>
            </Card>
        </Link>
    )
}