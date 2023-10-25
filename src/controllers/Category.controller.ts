import prisma from '@/db/clien'
import categories from '@/mock/categories.json'

export async function getCategories() {
    const categories = await prisma.category.findMany({});

    return categories;
}