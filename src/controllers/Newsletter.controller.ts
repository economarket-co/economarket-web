import prisma from "@/db/clien";

export async function getNewsLetter(email: string) {
    const newsLetter = await prisma.subscription.findUnique({ where: { email } });

    return newsLetter;
}

export async function createNewsLetter(email: string) {
    const newsLetter = await prisma.subscription.create({ data: { email } });

    return newsLetter;
}