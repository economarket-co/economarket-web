
import prisma from '@/db/clien';
import { productsPrices } from '@/mock/products';
import { SuperMarket } from '@prisma/client';

type filters = {
    name?: string,
    ids?: string[] | undefined, 
    categories?: string[], 
    superMarkets?: SuperMarket[]
    userId?: string
}

export async function getProducts(filters : filters){
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: filters.name || "",
                mode: "insensitive"
            },
            id: {
                in: filters.ids?.map((id) => Number(id)) || undefined
            },
            SubCategory: {
                category: {
                    id: {
                        in: filters.categories?.map((id) => Number(id)) || undefined
                    }
                }
            },
            productPrices: {
                some: {
                    superMarket: {
                        in: filters.superMarkets || undefined
                    }
                }
            }
        },
        include: {
            productPrices: {
                where: {
                    superMarket: {
                        in: filters.superMarkets || undefined
                    }
                },
            },
            SubCategory: {
                include: {
                    category: true
                }
            },
            favorites: {
                where: {
                    userId: filters.userId || undefined
                }
            }
        }
    });

    return products;
}