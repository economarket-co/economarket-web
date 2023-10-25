import { Product } from "@prisma/client"

export type cartItemWithProduct = {
    id: number,
    priceId: number,
    product: Product,
    quantity: number
}

