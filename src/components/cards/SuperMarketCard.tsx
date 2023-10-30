import { formatCurrency } from "@/utils"
import { quicksand } from "@/fonts"
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
        <Card className="w-[160px] lg:w-[230px] xl:w-[320px]">
            <CardBody className="p-0">
                <img src={props.img} className="h-[92xp] md:h-[50px] lg:h-[110px] object-fill" alt="olimpica" />
            </CardBody>
            <CardFooter className="flex flex-col gap-2">
                <p className={`${quicksand.className} text-[14pxs] lg:text-[18px] xl:text-3xl font-medium`}>{props.price ? formatCurrency(props.price) : "No disponible"}</p>
                <p className={`${quicksand.className} text-[10px] lg:text-[14px] xl:text-xl text-[#646464]`}>{props.quantityPerUnit} {props.unit}</p>
                <p className={`${quicksand.className} text-[10px] lg:text-[14px] xl:text-xl text-[#646464]`}>
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