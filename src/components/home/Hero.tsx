import { dmserif, quicksand } from "@/fonts";
import Link from "next/link";

export default function Hero() {
    return (
      <div className='flex flex-col flex-items justify-center items-center text-white relative min-h-screen py-16 overflow-hidden'>
        <video src="/videos/home-bg.mp4" className='absolute min-w-full min-h-full max-w-none ' autoPlay />

        <div className='mx-auto flex flex-col gap-8 items-center z-40 max-w-[300px] lg:max-w-[1000px] text-center'>
          <h2 className={`font-normal text-6xl ${dmserif.className}`}>
            Lo que buscas, al mejor precio
          </h2>

          <div className={`font-medium ${quicksand.className} text-xl`}>
            En Economarket puedes comparar los precios del mismo producto en diferentes supermercados. Añade productos a tu carrito y encuentra los precios perfectos para tu mercado.
          </div>
          <div >
            <Link href="/products">
              <button className={`bg-[#F28705] text-white text-lg rounded-md px-6 py-2 shadow-md ${dmserif.className} font-bold`}>Empieza a mercar</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }