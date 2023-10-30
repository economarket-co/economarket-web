import { createProduct, getAllProducts, getFavoritesProducts, getProducts } from "@/controllers/Product.controller";
import { SuperMarket } from "@prisma/client";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    const supabase = createRouteHandlerClient({ cookies });
    const { data, error } = await supabase.auth.getSession();

    if (error) return NextResponse.json({ error }, { status: 500});

    const name = req.nextUrl.searchParams.get("name") || "";
    const ids = req.nextUrl.searchParams.get('ids')?.split(',') || undefined;
    let categories = req.nextUrl.searchParams.get('categories')?.split(',') || undefined;
    const superMarkets = req.nextUrl.searchParams.get('superMarkets')?.split(',') || undefined;
    const maxPrice = req.nextUrl.searchParams.get('maxPrice') || undefined;
    const category = req.nextUrl.searchParams.get('category') || undefined;
    const favorites = req.nextUrl.searchParams.get('favorites') || undefined; // only fetch favorite products
    const isForAdmin = req.nextUrl.searchParams.get('isForAdmin') || undefined; // only fetch favorite products
    const sort = req.nextUrl.searchParams.get('sort') || undefined; // only fetch favorite products

    try {
        if (!categories && category ) categories = [category];

        const filters = { 
            userId: data.session?.user.id,
            name, ids, 
            categories, 
            superMarkets: superMarkets as SuperMarket[],
            favorites: favorites === 'true' ? true : undefined,
            maxPrice: maxPrice ? Number(maxPrice) : undefined,
            sort: sort ? sort : undefined
        }
        
        if (isForAdmin) return NextResponse.json(await getAllProducts(filters), { status: 200});

        const products = filters.favorites ? await getFavoritesProducts(filters) : await  getProducts(filters);

        return NextResponse.json(products, { status: 200})
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error }, { status: 500})
    }
}

export async function POST(req: NextRequest, res: NextResponse) {
    const {...data} = await req.json();

    try {
        const product = await createProduct(data);
        return NextResponse.json(product, { status: 200})
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error }, { status: 500})
    }
}