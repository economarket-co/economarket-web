'use client';
import { Card, CardBody, CardFooter } from "@nextui-org/react"

type CategoryCardProps = {
    title: string,
    img: string
}

export default function CategoryCard(props: CategoryCardProps) {
    return (
        <Card className='hover:font-semibold cursor-pointer hover:-translate-y-6'>
            <CardBody className='p-0 h-[190px] w-[200px]'>
                <img className='h-full object-cover' src={props.img} alt={props.title} />
            </CardBody>
            <CardFooter className='bg-green-500 text-center'>
                <p className='font-dmserif text-lg text-center w-full text-white'>{props.title}</p>
            </CardFooter>
        </Card>
    )
}