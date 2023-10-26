import prisma from "@/db/clien";
import { SuperMarket } from "@prisma/client";

export async function createProductPrice(productId: number, price: number, superMarket:  SuperMarket) {
    const productPrice = await prisma.productPrice.create({
        data: {
            price,
            productId,
            superMarket
        }
    });

    return productPrice;
}