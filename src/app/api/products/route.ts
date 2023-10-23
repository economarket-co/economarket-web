import { getProducts } from "@/controllers/Product.Controller";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const name = req.nextUrl.searchParams.get("name") || "";

    try {
        const products = await  getProducts(name);

        return NextResponse.json(products, { status: 200})
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error }, { status: 500})
    }
    
}