
import prisma from '@/db/clien';
import { SuperMarket } from '@prisma/client';

type filtersForMany = {
    name?: string,
    ids?: string[] | undefined,
    categories?: string[],
    superMarkets?: SuperMarket[]
    userId?: string,
    favorites?: boolean
    maxPrice: number | undefined
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
            OR: [
                {
                    productPrices2: {
                        some: {
                            priceExito: {
                                lte: filters.maxPrice || undefined
                            }
                        }
                    }
                },
                {
                    productPrices2: {
                        some: {
                            priceCarulla: {
                                lte: filters.maxPrice || undefined
                            }
                        }
                    }
                },
                {
                    productPrices2: {
                        some: {
                            priceJumbo: {
                                lte: filters.maxPrice || undefined
                            }
                        }
                    }
                },
                {
                    productPrices2: {
                        some: {
                            priceOlimpica: {
                                lte: filters.maxPrice || undefined
                            }
                        }
                    }
                }
            ]
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
            },
            OR: [
                {
                    productPrices2: {
                        some: {
                            priceExito: {
                                lte: filters.maxPrice || undefined
                            }
                        }
                    }
                },
                {
                    productPrices2: {
                        some: {
                            priceCarulla: {
                                lte: filters.maxPrice || undefined
                            }
                        }
                    }
                },
                {
                    productPrices2: {
                        some: {
                            priceJumbo: {
                                lte: filters.maxPrice || undefined
                            }
                        }
                    }
                },
                {
                    productPrices2: {
                        some: {
                            priceOlimpica: {
                                lte: filters.maxPrice || undefined
                            }
                        }
                    }
                }
            ]
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


export async function createProduct(data: any) {
    const product = await prisma.product.create({
        data
    });

    return product;
}

export async function updateProduct(data: any) {
    const product = await prisma.product.update({
        where: {
            id: data.id
        },
        data
    });

    return product;
}

export async function deleteProduct(id: number) {
    const product = await prisma.product.delete({
        where: {
            id
        }
    });

    return product;
}