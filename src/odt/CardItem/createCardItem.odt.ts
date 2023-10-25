import { ProductPrice, Product } from "@prisma/client"

export type CreateCardItem = {
    priceId?: number,
    product: Product,
    quantity: number
}