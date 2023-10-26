import { getProduct } from "@/controllers/Product.controller";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: any) {
    const { id } = params;

    if (!id) return { status: 400, body: { error: "Missing id" } };

    try {
        const supabase = createRouteHandlerClient({ cookies });
        const { data, error } = await supabase.auth.getSession();

        if (error) return { status: 500, body: { error } };

        const filters = { id: Number(id), userId: data.session?.user.id}
        const product = await getProduct(filters);

        console.log(product);
        return NextResponse.json(product, { status: 200})
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error }, { status: 500})
    }

}