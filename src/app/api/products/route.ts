import { getProducts } from "@/controllers/Product.controller";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const name = req.nextUrl.searchParams.get("name") || "";
    const id = req.nextUrl.searchParams.get('id') || undefined;

    try {
        const products = await  getProducts(name, Number(id));

        return NextResponse.json(products, { status: 200})
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error }, { status: 500})
    }
    
}