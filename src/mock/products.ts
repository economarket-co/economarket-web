import { ProductFull } from "@/odt/Product/productFull";

export const productsPrices: ProductFull[] = [
    {
        id: 1,
        name: "Huevo Aa Rojo 30Und Pet KIKES",
        image: "https://exitocol.vtexassets.com/arquivos/ids/19739772/Huevo-Aa-Rojo-30und-Pet-1037843_a.jpg?v=638308599012630000",
        createdAt: new Date(),
        updatedAt: new Date(),
        quantityPerUnit: "500 Gr",
        unit: "Gr",
        linkCarulla: "https://carulla.vtexassets.com/arquivos/ids/13652529/Huevo-Aa-Rojo-30und-Pet-1037843_a.jpg?v=638308598998570000",
        linkExito: "https://exitocol.vtexassets.com/arquivos/ids/19739772/Huevo-Aa-Rojo-30und-Pet-1037843_a.jpg?v=638308599012630000",
        linkJumbo: "https://www.tiendasjumbo.co/huevos-kikes-rojo-tipo-aa-x30und/p",
        linkOlimpica: null,
        productPrices: [
            {
                id: 1,
                price: 1000,
                proudctId: 1,
                superMarket: "Carulla",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                price: 3000,
                proudctId: 1,
                superMarket: "Exito",
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        ]
    }
]

