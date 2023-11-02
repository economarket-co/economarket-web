import { createOffer, getOffers } from "@/controllers/Offer.controller";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const offers = await getOffers();
        return NextResponse.json(offers);
    }   catch (e: any) {
        console.error(e);
        return NextResponse.json( { error: e.message }, { status: 500})
    }
}

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.json();
    try {
        const offers = await createOffer(data);
        return NextResponse.json(offers);
    }   catch (e: any) {
        console.error(e);
        return NextResponse.json( { error: e.message }, { status: 500})
    }
}