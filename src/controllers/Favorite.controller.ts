import prisma from "@/db/clien";

export async function createFavorite(userId: string, productId: number) {
    const favorite = await prisma.favorites.create({
        data: {
            userId,
            productId,
        }
    });

    return favorite;
}

export async function deleteFavorite(userId: string, productId: number) {
    const favorite = await prisma.favorites.delete({
        where: {
            userId_productId: {
                userId,
                productId,
            }
        }
    });

    return favorite;
}