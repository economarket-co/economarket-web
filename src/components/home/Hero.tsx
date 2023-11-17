"use client";
import { dmserif, quicksand } from "@/fonts";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    //@ts-ignore
    const playPromise = videoRef.current?.play();

    if (playPromise !== undefined) {
      playPromise
        //@ts-ignore
        .then(_ => { })
        .catch((error: any) => {
          // Autoplay was prevented
          console.error('Autoplay prevented:', error);
        });
    }
  }, []);

  return (
    <div className={`flex flex-col flex-items justify-center items-center overflow-hidden 
        text-white relative py-16 h-[400px] lg:h-[500px] 2xl:h-[700px]`}
    >
      <video
        ref={videoRef}
        className='absolute min-w-full h-[600px] lg:h-[800px] max-w-none object-cover'
        autoPlay={true}
        loop={true}
        controls={false}
        playsInline
        muted
      >
        <source src="/videos/home-bg.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute min-w-full h-[600px] lg:h-[800px] max-w-none"
        style={{
          backdropFilter: "blur(2px)",
          backgroundBlendMode: "hard-light, normal, normal, normal",
          background: "linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%)"
        }}
      >

      </div>

      <div className='mx-auto flex flex-col gap-8 items-center z-40 max-w-[260px] md:max-w-[550px] lg:max-w-[1000px] text-center'>
        <h2 className={`font-normal text-4xl lg:text-6xl ${dmserif.className}`}>
          Lo que buscas, al mejor precio
        </h2>

        <div className={`font-medium ${quicksand.className} text-sm md:text-base lg:text-xl`}>
          En Economarket puedes comparar los precios del mismo producto en diferentes supermercados. Añade productos a tu carrito y encuentra los precios perfectos para tu mercado.
        </div>
        <div >
          <Link href="/v1/products">
            <button className={`bg-[#F28705] text-white text-lg rounded-md px-6 py-2 shadow-md ${dmserif.className} font-bold`}>Empieza a mercar</button>
          </Link>
        </div>
      </div>
    </div>
  )
}