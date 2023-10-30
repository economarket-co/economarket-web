import prisma from "@/db/clien";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: any) {
    const { id } = params;

    try {
        const category = await prisma.category.findUnique({
            where: {
                id: Number(id)
            }
        });
        
        if (!category) return NextResponse.json({ error: 'Category not found' }, { status: 404 });
        
        return NextResponse.json(category);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error }, { status: 500 });
    }
}

export async function PATCH(req: NextRequest, { params }: any ) {
    const { id } = params;

    const { ...data } = await req.json();

    try {
        const category = await prisma.category.update({
            where: {
                id: Number(id)
            },
            data
        });
        
        if (!category) return NextResponse.json({ error: 'Category not found' }, { status: 404 });
        
        return NextResponse.json(category);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, { params }: any) {
    const { id } = params;

    try {
        const category = await prisma.category.delete({
            where: {
                id: Number(id)
            }
        });

        if (!category) return NextResponse.json({ error: 'Category not found' }, { status: 404 });
        
        return NextResponse.json(category);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error }, { status: 500 });
    }
}