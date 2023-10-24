import { getCategories } from "@/controllers/Category.controller";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    // filters
    const categories = req.nextUrl.searchParams.get('categories')?.split(',') || undefined;
    const supermarkets = req.nextUrl.searchParams.get('supermarkets')?.split(',') || undefined;
    const priceParam =  req.nextUrl.searchParams.get('priceRange');
    const priceRange = priceParam ? parseInt(priceParam) : undefined;  

    try {
        const categories = await getCategories();

        return NextResponse.json(categories, { status: 200})
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error }, { status: 500})
    }
}