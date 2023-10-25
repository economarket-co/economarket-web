import { getCart } from "@/controllers/Cart.controller";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: any) {
    const { id } = params;

    try {
        const cart = await getCart(Number(id));
        
        if (!cart) return NextResponse.json({ message: "Cart not found" }, { status: 404, });

        return NextResponse.json(cart);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500, });
    }
}