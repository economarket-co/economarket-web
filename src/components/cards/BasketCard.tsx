import { formatCurrency } from "@/utils"
import { quicksand } from "@/fonts"
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react"
import { SuperMarket } from "@prisma/client"
import Link from "next/link"

type BasketCardProps = {
    image: string,
    cartProducts: any[],
    supermarket: SuperMarket,
    isBestOption?: boolean
}

export default function BasketCard(props: BasketCardProps) {
    const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();
    
    function hadleBuy() {

        props.cartProducts.forEach(product => {
            if (product.avaible) {
                window.open(product.link, '_blank');
            }
        })
    }

    return (
        <div className="flex flex-col">
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="w-[800px]">
                <ModalContent className={` ${quicksand.className} flex flex-col items-center`} >
                    {(onClose) => (
                        <> 
                            <ModalHeader className={`flex flex-col items-center text-center gap-4 text-[#434343]`}>
                                <img src="/icons/icon-info.svg" alt="" className="w-24 h-24"/>    
                                <p className="text-[26px]">Vamos a abrir links a todos los productos</p>
                            </ModalHeader>
                            <ModalBody className={`text-[18px] px-10 text-center`}>
                                Al elegir comprar el carrito te ayudaremos a encontrar los productos en este supermercado ¿Quieres abrir las páginas?
                            </ModalBody >
                            <ModalFooter className="flex items-center gap-4">
                                <button 
                                    className="bg-[#01CC5E] text-white py-2 px-8 rounded-lg text-base"
                                    onClick={hadleBuy}    
                                >Abrir páginas</button>
                                <button 
                                    className="bg-[#B6B6B6] text-white py-2 px-8 rounded-lg text-base" 
                                    onClick={() => onClose()}
                                >Seguir comprando</button>
                            </ModalFooter>
                        </>
                    )
                    }
                </ModalContent>
            </Modal>
            {
                props.isBestOption &&
                <div className={`bg-[#01CC5E] text-lg ${quicksand.className} rounded-t-xl py-5 text-white flex gap-4 justify-center`}>
                    {"Opción más económica "}
                    <img src="/icons/star.svg" alt="start" />
                </div>
            }

            <div className={`${quicksand.className} rounded-3xl overflow-hidden md:w-[287.225px] h-fit ${props.isBestOption && 'rounded-t-none border-3 border-[#01CC5E]'} relative`}
                style={{ boxShadow: "0px 3.72755px 19.56966px 0px rgba(0, 0, 0, 0.25)" }}
            >
                <img src={props.image} alt={props.image} className="w-full h-[140px] lg:h-[71.289px] xl:h-[120px] object-fill" />

                <div className="flex flex-col gap-14 py-8 px-4">
                    <div className="flex flex-col gap-5 max-h-[500px] overflow-y-auto">
                        {
                            props.cartProducts.map((product) => {

                                return (
                                    <div className="flex flex-col gap-2" key={product.id}>

                                        <div key={product.id} className="flex justify-between items-center gap-3">
                                            <div className={`flex gap-3 items-center ${product.avaible ? "w-[55%]" : "w-[80%] "} `}>
                                                <img src={product.product.image} alt="producto" className="h-12 w-12 object-fill" />
                                                <p className="text-[12px] md:text-[12.893px] text-start">{product.product.name}</p>
                                                {
                                                    !product.avaible &&
                                                    <img src="/icons/error.svg" className="w-6 h-6" />
                                                }
                                            </div>

                                            <div className="flex gap-2 items-center">
                                                <p className="flex gap-2 text-[12px] md:text-[12.893px] ">
                                                    {
                                                        product.avaible && (
                                                            <>
                                                                <span>{formatCurrency(product.price)}</span>

                                                                <span>x</span>
                                                            </>
                                                        )
                                                    }
                                                    <span>{product.quantity}</span>
                                                </p>
                                                {
                                                    product.avaible && <Link href={product.link} target="_blank"><img src="/icons/external-link.svg" className="h-6 w-6" /></Link>
                                                }
                                            </div>
                                        </div>

                                        <div>
                                            {
                                                !product.avaible &&
                                                <p className="text-start text-[9.75px] md:text-[11px]">
                                                    La referencia de este producto es distinta en este supermercado. Puedes eliminarla desde tu carrito
                                                </p>
                                            }
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="flex flex-row-reverse justify-between md:flex-col gap-4 border-t-1 text-end pt-3 md:py-4">
                        <div className="flex flex-col">
                            <p className="text-sm md:text-[15.75px] text-[#9D9D9D]">{props.cartProducts.length} productos de su lista</p>
                            <p className={`${quicksand.className} text-xl font-medium md:text-[31.56px] text-[#434343]`}>
                                {
                                    formatCurrency(props.cartProducts.reduce((total, product) => {
                                        return product ? total + (product.price * product.quantity) : total + 0;
                                    }, 0))
                                }</p>
                        </div>
                        <button onClick={onOpen} className={`${quicksand.className} font-semibold text-sm md:text-[15.75px] py-4 px-4 text-white bg-[#01CC5E] rounded-md`}>Comprar la lista</button>
                    </div>

                </div>
            </div>
        </div>

    )
}