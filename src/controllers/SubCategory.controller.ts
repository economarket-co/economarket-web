import prisma from "@/db/clien";

type filters = {
    name?: string | undefined;
}

export async function getSubCategories(filters: filters) {
    return await prisma.subCategory.findMany({
        where: {
            name: {
                mode: 'insensitive',
                contains: filters.name || undefined
            }
        },
        include: {
            category: true
        },
        orderBy: {
            name: 'asc'
        }
    });
}

export async function getSubCategory(id: number) {
    return await prisma.subCategory.findUnique({
        where: {
            id
        },
        include: {
            category: true
        }
    });
}

export async function createSubCategory(data: any) {
    return await prisma.subCategory.create({
        data
    });
}

export async function updateSubCategory(id: number, data: any) {
    return await prisma.subCategory.update({
        where: {
            id
        },
        data
    });
}

export async function deleteSubCategory(id: number) {
    return await prisma.subCategory.delete({
        where: {
            id
        }
    });
}