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