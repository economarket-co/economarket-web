import { Card, CardBody, CardFooter, Button } from "@nextui-org/react"
import AddToCartButton from "../buttons/AddToCartButton"
import { ProductFull } from "@/odt/Product/productFull"
import { ProductPrice } from "@prisma/client"

type ProductCardProps = {
    product: ProductFull,
}

export default function ProductCard(props: ProductCardProps) {
    const avaible = props.product.productPrices?.length > 0;
    const avaibleAt = avaible ? props.product.productPrices.map(price => price.superMarket).join(',') : 'No disponible';

    return (
        <Card className='w-[220px] border shrink-0' style={{ boxShadow: "0px 2px 12px 0px rgba(0, 0, 0, 0.25)" }}>
            <CardBody className='p-0 h-[190px] border-b'>
                <img className='h-full object-fill' src={props.product.image} alt={props.product.name} />
            </CardBody>
            <CardFooter className='flex flex-col gap-2 px-4 items-start overflow-x-hidden'>
                {/* <Tooltip content={props.product.name} placement="bottom"> */}
                <p className='font-quicksand text-sm text-[#343434] overflow-clip'>{props.product.name}</p>
                {/* </Tooltip> */}
                <p className='font-quicksand text-xs text-[#646464] '>{props.product.unit}</p>
                <div className="flex gap-2">
                    <img src='/icons/price-tag.svg' />
                    <p className='font-quicksand text-xs text-[#646464]'>
                        {
                           avaibleAt
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