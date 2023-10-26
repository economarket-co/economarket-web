import { formatCurrency } from "@/app/utils"
import { Card, CardBody, CardFooter } from "@nextui-org/react"

type SuperMarketCardProps = {
    name: string,
    img: string,
    price?: number | null
    unit: string,
    quantityPerUnit: number,
    unitPrice?: number | null
}
export function SuperMarketCard(props: SuperMarketCardProps) {
    return (
        <Card className="w-full lg:w-[300px] xl:w-[320px]">
            <CardBody className="p-0">
                <img src={props.img} className="h-[110px] object-fill" alt="olimpica" />
            </CardBody>
            <CardFooter className="flex flex-col gap-2">
                <p className="font-quicksand text-3xl font-medium">{props.price ? formatCurrency(props.price) : "No disponible"}</p>
                <p className="font-quicksand text-lg text-[#646464]">{props.quantityPerUnit} {props.unit}</p>
                <p className="font-quicksand text-lg text-[#646464]">
                    {
                        !props.unitPrice ?
                            "No disponible"
                        :
                        `${props.unit}  a ${formatCurrency(props.unitPrice)}`
                    }
                </p>
            </CardFooter>
        </Card>
    )
}