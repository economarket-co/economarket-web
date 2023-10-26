import { getProducts } from "@/controllers/Product.controller";
import { NextResponse } from "next/server";
import puppeteer from "puppeteer";
import { Browser } from "puppeteer";
import * as cheerio from "cheerio";
import { Product, SuperMarket } from "@prisma/client";
import { createProductPrice } from "@/controllers/ProductPrice.controller";
import prisma from "@/db/clien";

export async function GET() {
    const browser = await puppeteer.launch({ headless: "new"});

    const products = await prisma.product.findMany({});

    const scraps = [];
    for (const product of products) {
        scraps.push(scrap(browser, product));
    }

    await Promise.all(scraps);

    browser.close();
    return NextResponse.json("hola");
}

async function scrap(browser: Browser, product: Product) {
    const page = await browser.newPage();

    if (product.linkJumbo) {
        await page.goto(product.linkJumbo);
    
        const html = await page.content();
    
        const $ = cheerio.load(html);
    
        const rawPrice = $("div.tiendasjumboqaio-jumbo-minicart-2-x-price").first().text();
        console.log(rawPrice)
        const priceWithoutDollar = rawPrice.replace('$', '').trim();
        const price = Number(priceWithoutDollar.replace(".", ""));

        await createProductPrice(product.id, price, SuperMarket.Jumbo);
    }

    if (product.linkExito) {
        await page.goto(product.linkExito);
    
        const html = await page.content();
    
        const $ = await cheerio.load(html);
    
        const rawPrice = await $("span.exito-vtex-components-4-x-currencyContainer").first().text();
        console.log(rawPrice)
        const priceWithoutDollar = rawPrice.replace('$', '').trim();
        const price = Number(priceWithoutDollar.replace(".", ""));

        await createProductPrice(product.id, price, SuperMarket.Exito);
    }
}