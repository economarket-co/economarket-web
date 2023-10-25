import { createCart, getCartByUserEmail } from "@/controllers/Cart.controller";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: any) {
    const userEmail = req.nextUrl.searchParams.get("userEmail");

    if (!userEmail) return NextResponse.json({ message: "Missing userEmail" }, { status: 400, });

    try {
        const cart = await getCartByUserEmail(userEmail);
    
        if (!cart) return NextResponse.json({ message: "Cart not found" }, { status: 404, });
    
        return NextResponse.json(cart);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500, });
    }
}

export async function POST(req: NextRequest) {
    const { userEmail } = await req.json();

    try {
        const cart = await createCart(userEmail || null);
        return NextResponse.json(cart);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500, });
    }
}

export async function PATCH(req: NextRequest) {
    const { item } = await req.json();

    
}