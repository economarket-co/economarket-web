import { ProductPrice, Product } from "@prisma/client";

export type ProductPriceFull = ProductPrice & {
    product: Product
}