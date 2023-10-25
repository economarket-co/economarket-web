export type cardItemWithProduct = {
    id: number,
    priceId: number,
    product: {
        id: number,
        name: string,
        description: string,
        image: string,
        price: number,
        priceId: number
    },
    quantity: number
}

