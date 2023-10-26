import { createFavorite } from "@/controllers/Favorite.controller";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";


export async function POST(req: NextRequest, res: NextResponse) {
    const { productId } = await req.json();

    const supabase = createRouteHandlerClient({ cookies });
    const { data, error } = await supabase.auth.getSession();

    if (error) return NextResponse.json({ error }, { status: 500 });
    if (!data.session) return NextResponse.json({ error: "Missing session" }, { status: 400 });


    if (!productId) return NextResponse.json({ error: "Missing userId or productId" }, { status: 400 });

    try {
        const favorite = await createFavorite(data.session.user.id, productId);

        return NextResponse.json(favorite);
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}