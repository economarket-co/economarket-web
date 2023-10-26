import { formatCurrency } from "@/app/utils"
import { Button } from "@nextui-org/react"
import { SuperMarket } from "@prisma/client"
import Link from "next/link"

type BasketCardProps = {
    image: string,
    cartProducts: any[],
    supermarket: SuperMarket,
    isBestOption?: boolean
}

export default function BasketCard(props: BasketCardProps) {
    return (
        <div className={`rounded-3xl overflow-hidden w-[300px] lg:w-[380px] ${props.isBestOption && 'border-3 border-[#01CC5E]'}`}
            style={{ boxShadow: "0px 3.72755px 19.56966px 0px rgba(0, 0, 0, 0.25)" }}
        >
            <img src={props.image} alt={props.image} className="w-full h-[100px] object-fill" />

            <div className="flex flex-col gap-14 py-5 px-4">
                <div className="flex flex-col gap-5 h-[300px] overflow-y-scroll">
                    {
                        props.cartProducts.map((product) => {

                            return (
                                <div key={product.id} className="flex justify-between items-center gap-4">
                                    <div className="flex gap-3 items-center ">
                                        <img src={product.product.image} alt="producto" className="h-12" />
                                        <p className="text-start">{product.product.name}</p>
                                    </div>

                                    <div className="flex gap-3 items-center">
                                        <p>{product.quantity}</p>
                                        <Link href={product.link }><img src="/icons/external-link.svg" /></Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="flex flex-col gap-4 border-t-1 text-end py-4">
                    <p className="text-lg text-[#9D9D9D]">{props.cartProducts.length} productos de su lista</p>
                    <p className="font-quicksand text-3xl text-[#434343]">
                        {
                            formatCurrency(props.cartProducts.reduce((total, product) => {
                                return product ? total + (product.price * product.quantity) : total + 0;
                            }, 0))
                        }</p>
                    <Button color="success" className="w-full text-white">Comprar</Button>
                </div>

            </div>
        </div>
    )
}