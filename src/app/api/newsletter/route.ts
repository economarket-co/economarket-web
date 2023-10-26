import { createNewsLetter, getNewsLetter } from "@/controllers/Newsletter.controller";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { email } = await req.json();
    
    console.log(email);
    if (!email) return NextResponse.json({ error: "Email is required" }, { status: 400 });

    try {

        const exists = await getNewsLetter(email);

        if (exists) return NextResponse.json({ error: "Email already exists" }, { status: 400 });

        const newsLetter = await createNewsLetter(email);
        
        return NextResponse.json(newsLetter);
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}