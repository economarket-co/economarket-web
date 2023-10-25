
import { productsPrices } from '@/mock/products';

// export async function createProduct(product: createProductOdt) {
//     const newProduct = await prisma.proudct.create({
//         data: {
//             name: product.name

//         }
//     })
// }

export async function getProducts(name?: string, id?: number | undefined) {
    let products = name ?
        productsPrices.filter((product) => product.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
        :
        productsPrices;

    if (id) {
        products = products.filter((product) => product.id === id);
    }

    return products;
}