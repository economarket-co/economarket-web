import { deleteProduct, getProduct, updateProduct } from "@/controllers/Product.controller";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: any) {
    const { id } = params;

    if (!id) return NextResponse.json( { error: "Missing id" }, { status: 400} );

    try {
        const supabase = createRouteHandlerClient({ cookies });
        const { data, error } = await supabase.auth.getSession();

        if (error) return NextResponse.json(  { error }, { status: 500 });

        const filters = { id: Number(id), userId: data.session?.user.id}
        const product = await getProduct(filters);

        return NextResponse.json(product, { status: 200})
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error }, { status: 500})
    }
}

export async function PATCH(req: NextRequest, { params }: any) {
    const {...data} = await req.json();
    const { id } = params;

    try {
        const product = await updateProduct( Number(id), data);
        return NextResponse.json(product, { status: 200})
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error }, { status: 500})
    }
}

export async function DELETE(req: NextRequest, { params }: any) {
    const { id } = params

    try {
        const product = await deleteProduct(Number(id));
        return NextResponse.json(product, { status: 200})
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error }, { status: 500})
    }
}