
import prisma from '@/db/clien';
import { productsPrices } from '@/mock/products';
import { SuperMarket } from '@prisma/client';

export async function getProducts(name?: string, ids?: string[] | undefined, categories?: string[], superMarkets?: SuperMarket[]) {
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: name || "",
                mode: "insensitive"
            },
            id: {
                in: ids?.map((id) => Number(id)) || undefined
            },
            SubCategory: {
                category: {
                    id: {
                        in: categories?.map((id) => Number(id)) || undefined
                    }
                }
            },
            productPrices: {
                some: {
                    superMarket: {
                        in: superMarkets || undefined
                    }
                }
            }
        },
        include: {
            productPrices: {
                where: {
                    superMarket: {
                        in: superMarkets || undefined
                    }
                },
            },
            SubCategory: {
                include: {
                    category: true
                }
            },
        }
    });

    return products;
}