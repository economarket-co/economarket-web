import { Favorites, Product, ProductPrice, ProductPrice2 } from "@prisma/client";

export type ProductFull = Product & {
    productPrices2: ProductPrice2[],
    favorites: Favorites[]
}