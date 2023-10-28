import { Quicksand, Poppins, DM_Serif_Display } from "next/font/google";

export const quicksand = Quicksand({
    subsets: ['latin-ext'],
    display: 'swap',
    weight: ["400", "500", "600", "700"],
});

export const poppins = Poppins({
    subsets: ['latin-ext'],
    display: 'swap',
    weight: ["400", "500", "600", "700"],
});

export const dmserif = DM_Serif_Display({
    subsets: ['latin-ext'],
    display: 'swap',
    weight: ["400"],
});