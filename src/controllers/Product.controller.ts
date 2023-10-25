
import prisma from '@/db/clien';
import { productsPrices } from '@/mock/products';
import { SuperMarket } from '@prisma/client';

// export async function createProduct(product: createProductOdt) {
//     const newProduct = await prisma.proudct.create({
//         data: {
//             name: product.name

//         }
//     })
// }

export async function getProducts(name?: string, id?: number | undefined, categories?: string[], superMarkets?: SuperMarket[]) {
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: name || "",
                mode: "insensitive"
            },
            id: id || undefined,
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