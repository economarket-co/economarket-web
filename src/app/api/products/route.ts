import { getProducts } from "@/controllers/Product.controller";
import { SuperMarket } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const name = req.nextUrl.searchParams.get("name") || "";
    const id = req.nextUrl.searchParams.get('id') || undefined;
    const categories = req.nextUrl.searchParams.get('categories')?.split(',') || undefined;
    const superMarkets = req.nextUrl.searchParams.get('superMarkets')?.split(',') || undefined;

    console.log(superMarkets);
    try {
        const products = await  getProducts(name, Number(id), categories, superMarkets as SuperMarket[]);

        return NextResponse.json(products, { status: 200})
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error }, { status: 500})
    }
    
}