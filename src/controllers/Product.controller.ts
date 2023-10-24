import prisma from "@/db/clien";
import { createProductOdt } from "@/odt/Product/createProduct.od";

import data from '@/mock/datos_diarios.json'

// export async function createProduct(product: createProductOdt) {
//     const newProduct = await prisma.proudct.create({
//         data: {
//             name: product.name

//         }
//     })
// }

export async function getProducts(name?: string) {
    return name ?
        data.filter((product) => product.Descripcion.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
        :
        data;
}