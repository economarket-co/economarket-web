import prisma from "@/db/clien";

type Offer = {
    id: number;
    title: string;
    content: string;
    link: string;
    size: number;
    image: string;
}

type OfferInput = {
    title: string;
    content: string;
    link: string;
    size: number;
    image: string;
}

export async function getOffers() {
    const offers = await prisma.offer.findMany({
        orderBy: {
            id: "asc"
        }
    });
    return offers;
}

export async function getOffer(id: number) {
    const offer = await prisma.offer.findUnique({
        where: {
            id: id
        }
    });
    return offer;
}

export async function createOffer(data: OfferInput) {
    const offer = await prisma.offer.create({
        data: {
            title: data.title,
            content: data.content,
            link: data.link,
            size: data.size,
            image: data.image
        }
    });

    return offer;
}

export async function updateOffer(data: Offer) {
    const offer = await prisma.offer.update({
        where: {
            id: data.id
        },
        data: {
            title: data.title,
            content: data.content,
            link: data.link,
            size: data.size,
            image: data.image
        }
    });

    return offer;
}

export async function deleteOffer(id: number) {
    const offer = await prisma.offer.delete({
        where: {
            id: id
        }
    });

    return offer;
}