import { Product } from "@prisma/client"

export type cardItemWithProduct = {
    id: number,
    priceId: number,
    product: Product,
    quantity: number
}

