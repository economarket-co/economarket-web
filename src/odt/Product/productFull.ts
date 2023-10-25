import { Product, ProductPrice } from "@prisma/client";

export type ProductFull = Product & {
    productPrices: ProductPrice[]
}