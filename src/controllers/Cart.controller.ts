import prisma from "@/db/clien";

export async function getCart(id: number) {
    const cart = await prisma.cart.findUnique({ 
        where: { id },
        include: {
            cartItems: {
                include: {
                    product: true
                }
            }
        }
    });
    return cart;
}

export async function getCartByUserEmail(userEmail: string) {
    const cart = await prisma.cart.findUnique({
        where: { userEmail },
        include: {
            cartItems: {
                include: {
                    product: true
                }
            }
        }
    });
    return cart;
}

export async function createCart(userEmail: string | null) {
    const cart = await prisma.cart.create({ data: { userEmail }, include: { cartItems: true } });

    return cart;
}