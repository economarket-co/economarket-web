import { getCategories } from "@/controllers/Category.controller";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const categories = await getCategories();

        return NextResponse.json(categories, { status: 200})
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error }, { status: 500})
    }
}