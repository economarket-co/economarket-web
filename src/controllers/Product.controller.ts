
import prisma from '@/db/clien';
import { SuperMarket } from '@prisma/client';

type filtersForMany = {
    name?: string,
    ids?: string[] | undefined,
    categories?: string[],
    superMarkets?: SuperMarket[]
    userId?: string,
    favorites?: boolean
}

type filtersForOne = {
    id:  number
    superMarkets?: SuperMarket[]
    userId?: string
}

export async function getProducts(filters: filtersForMany) {
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
        },
        include: {
            productPrices2: {
                orderBy: {
                    createdAt: "desc"
                },
                take: 1
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

export async function getFavoritesProducts(filters: filtersForMany) {
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
            
            favorites: {
                some: {
                    userId: filters.userId || undefined
                }
            }
        },
        include: {
            productPrices2: {
                orderBy: {
                    createdAt: "desc"
                },
                take: 1
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

export async function getProduct(filters: filtersForOne) {
    const products = await prisma.product.findUnique({
        where: {
            id: filters.id
        },
        include: {
            productPrices2: {
                orderBy: {
                    createdAt: "desc"
                },
                take: 1
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