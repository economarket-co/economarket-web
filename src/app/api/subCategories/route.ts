import { createCategory, getCategories } from "@/controllers/Category.controller";
import { createSubCategory, getSubCategories } from "@/controllers/SubCategory.controller";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    // filters
    const name = req.nextUrl.searchParams.get('name') || undefined;

    try {
        const filters = {
            name
        }

        const categories = await getSubCategories(filters);

        return NextResponse.json(categories, { status: 200})
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error }, { status: 500})
    }
}

export async function POST(req: NextRequest) {
    const { ...data } = await req.json();

    try {
        const category = await createSubCategory(data);

        return NextResponse.json(category);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error }, { status: 500 });
    }
}