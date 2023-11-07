"use client";
import { quicksand } from "@/fonts";
import { useEffect, useState } from "react";

export default function Allies() {
  const [imageUrl, setImageUrl] = useState("/images/allies-bg.png");

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setImageUrl("/images/allies-bg-mobile.png");
      } else {
        setImageUrl("/images/allies-bg.png");
      }
    })

    if (window.innerWidth < 768) setImageUrl("/images/allies-bg-mobile.png");
  }, []);
  
  return (
    <div className='flex flex-col flex-items justify-center items-center text-white relative md:min-h-[400px] lg:min-h-[600px]'>
      <img src={imageUrl} className='absolute min-w-full min-h-full max-w-full max-h-[300px] -z-10' />

      <div className='mx-auto py-5 flex flex-col gap-8 items-center z-50  max-w-[1000px]'>
        <img src="/images/logo-white.png" className="h-[55px] md:h-[80px] " />

        <div className={`text-sm md:text-[18px] px-4 font-medium text-center ${quicksand.className} max-w-[360px] md:max-w-[500px] lg:max-w-[700px] grow`}>
          Economarket es tu socio para una experiencia de compra ganadora. Colaboramos con reconocidos supermercados
          de cadena como Éxito, Carulla, Jumbo y Olímpica para ofrecerte una herramienta que te permite encontrar
          los mejores precios. Nos dedicamos a simplificar tu vida diaria, ahorrándote tiempo y dinero
          con transparencia y seguridad.
        </div>
        <div className='grid grid-cols-2 items-center justify-center md:flex md:flex-row lg:justify-between gap-6 md:gap-10'>
          <img src="/images/logo-exito.svg" className="w-[80px]" />
          <img src="/images/logo-jumbo.svg" className="w-[80px]" />
          <img src="/images/logo-carulla.svg" className="w-[80px] " />
          <img src="/images/logo-olimpica.svg" className="w-[80px]" />
        </div>
      </div>
    </div>
  )
}