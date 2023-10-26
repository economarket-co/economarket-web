import prisma from "@/db/clien";

export async function getNewsLetter(email: string) {
    const newsLetter = await prisma.newsLetter.findUnique({ where: { email } });

    return newsLetter;
}

export async function createNewsLetter(email: string) {
    const newsLetter = await prisma.newsLetter.create({ data: { email } });

    return newsLetter;
}