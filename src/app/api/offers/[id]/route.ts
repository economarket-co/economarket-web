import { deleteOffer, getOffer, updateOffer } from "@/controllers/Offer.controller";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: any) {
    const {id} = params;

    try {
        const offer = await getOffer(Number(id));
        return NextResponse.json(offer, { status: 200})
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ error }, { status: 500})
    }
}

export async function PATCH(req: NextRequest, { params }: any) {
    const {...data} = await req.json();
    const { id } = params;

    try {
        const offer = await updateOffer({ id: Number(id), ...data});
        return NextResponse.json(offer, { status: 200})
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error }, { status: 500})
    }
}

export async function DELETE(req: NextRequest, { params }: any) {
    const { id } = params

    try {
        const offer = await deleteOffer(Number(id));
        return NextResponse.json(offer, { status: 200})
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error }, { status: 500})
    }
}