import { Card, CardBody, CardFooter, Button } from "@nextui-org/react"
import AddToCartButton from "../buttons/AddToCartButton"

type ProductCardProps = {
    name: string,
    img?: string,
    unidad: string,
    companies: string[],
}

export default function ProductCard(props: ProductCardProps) {
    return (
        <Card className='w-[220px] border shrink-0' style={{ boxShadow: "0px 2px 12px 0px rgba(0, 0, 0, 0.25)" }}>
            <CardBody className='p-0 h-[190px] border-b'>
                <img className='h-full object-fill' src={props.img} alt={props.name} />
            </CardBody>
            <CardFooter className='flex flex-col gap-2 px-4 items-start overflow-x-hidden'>
                {/* <Tooltip content={props.name} placement="bottom"> */}
                <p className='font-quicksand text-sm text-[#343434] overflow-clip'>{props.name}</p>
                {/* </Tooltip> */}
                <p className='font-quicksand text-xs text-[#646464] '>{props.unidad}</p>
                <div className="flex gap-2">
                    <img src='/icons/price-tag.svg' /><p className='font-quicksand text-xs text-[#646464]'>Éxito, carulla, Olímpica, Jumbo</p>
                </div>
                <AddToCartButton />
            </CardFooter>
        </Card>
    )
}