import { formatCurrency } from "@/app/utils"
import { quicksand } from "@/fonts"
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
    function hadleBuy() {

        props.cartProducts.forEach(product => {
            setTimeout(() => {
                window.open(product.link, '_blank');
            }, 1000);
        })
    }

    return (
        <div className={`rounded-3xl overflow-hidden md:w-[500px] lg:w-[400px] ${props.isBestOption && 'border-3 border-[#01CC5E]'}`}
            style={{ boxShadow: "0px 3.72755px 19.56966px 0px rgba(0, 0, 0, 0.25)" }}
        >
            <img src={props.image} alt={props.image} className="w-full h-[140px] lg:h-[120px] object-fill" />

            <div className="flex flex-col gap-14 py-8 px-4">
                <div className="flex flex-col gap-5 h-[500px] overflow-y-auto">
                    {
                        props.cartProducts.map((product) => {

                            return (
                                <div key={product.id} className="flex justify-between items-center gap-1">
                                    <div className="flex gap-3 items-center max-w-[60%] ">
                                        <img src={product.product.image} alt="producto" className="h-12 w-12 object-fill" />
                                        <p className="text-start">{product.product.name}</p>
                                    </div>

                                    <div className="flex gap-2 items-center">
                                        <p className="flex gap-2">
                                            <span>{formatCurrency(product.price)}</span>
                                            <span>x</span>
                                            <span>{product.quantity}</span>
                                        </p>
                                        <Link href={product.link} target="_blank"><img src="/icons/external-link.svg" className="h-6 w-6" /></Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="flex flex-col gap-4 border-t-1 text-end py-4">
                    <p className="text-xl text-[#9D9D9D]">{props.cartProducts.length} productos de su lista</p>
                    <p className={`${quicksand.className} text-4xl text-[#434343]`}>
                        {
                            formatCurrency(props.cartProducts.reduce((total, product) => {
                                return product ? total + (product.price * product.quantity) : total + 0;
                            }, 0))
                        }</p>
                    <button onClick={hadleBuy} className={`${quicksand.className} font-semibold text-xl w-full py-4 text-white bg-[#01CC5E] rounded-md`}>Comprar la lista</button>
                </div>

            </div>
        </div>
    )
}