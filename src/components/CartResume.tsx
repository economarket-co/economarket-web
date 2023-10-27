import { cartItemWithProduct } from "@/types/cartItem"
import { Button } from "@nextui-org/react"

type CartTableProps = {
    cartItems: cartItemWithProduct[],
    notAvaibleCount: number
}
export default function CartResume(props: CartTableProps) {
    return (
        <div className="rounded-xl px-14 divide-y bg-white flex flex-col py-10 w-[400px] gap-2 font-quicksand">
            <h2 className="text-[#646464]">Resumen de compra</h2>

            <div className="flex flex-col gap-6 pt-3 text-[#9D9D9D]">
                <p>Tienes {props.cartItems.length} items en tu carrito.</p>

                {
                    props.notAvaibleCount > 0 ?
                        <p>Hay {props.notAvaibleCount} productos que no se encuentran en algunos supermercados. Revisa las listas y verifica que las alternativas sean de tu agrado.</p>

                        :
                        <p>Todos los productos seleccionados se encuentran disponibles en todos los supermercados</p>
                }

                <Button color="success" className="text-white ">Ver comparaciones</Button>
            </div>
        </div>
    )
}