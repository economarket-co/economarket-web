import Image from "next/image";
import SearchBar from "../SearchBar";
import { dmserif, quicksand } from "@/fonts";

export default function PreFooter() {
  return (
    <div className='flex flex-col items-center text-white relative h-[550px] md:h-[650px] lg:h-[1060px]' >
      <Image
        height={1100}
        width={1000}
        alt="prefooter-bg"
        src="/images/prefooter-bg.png"
        className='absolute min-w-full min-h-full max-w-full object-fill max-h-[1100px]'
      />

      <div className='mx-auto px-2 flex flex-col justify-between h-3/5 py-6 gap-8 items-center z-50 max-w-[1000px] text-white'>
        <div className='text-center'>
          <p className={`${quicksand.className} text-lg md:text-2xl text-white`}>Encontrar el mejor precio</p>
          <p className={`${dmserif.className} text-4xl md:text-6xl font-semibold`}>En solo tres pasos</p>
        </div>

        <div className='flex gap-6 justify-center items-center text-center'>
          <div className='grid items-center justify-center'>
            <Image
              width={56}
              height={56}
              src='/icons/search.svg'
              className='h-8 md:h-14 mx-auto'
              alt='search icon'
            />
            <p className={`${quicksand.className} text-base  md:text-xl font-semibold`}>Busca tu producto</p>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              width={56}
              height={56}
              src='/icons/shopping-cart.svg'
              className='h-8 md:h-14'
              alt='search icon'
            />
            <p className={`${quicksand.className} text-md md:text-xl font-semibold`}>Añadelo al carrito</p>
          </div>

          <div className='flex flex-col items-center'>
            <Image
              width={56}
              height={56}
              src='/icons/scales.svg'
              className='h-8 md:h-14'
              alt='search icon' 
            />
            <p className={`${quicksand.className} text-md md:text-xl font-semibold`}>Compara los precios</p>
          </div>
        </div>

        <div className='flex flex-col gap-4 text-center'>
          <h3 className={`text-[#033E8C] ${dmserif.className} text-4xl md:text-6xl`}>{`Así que cuentanos`}</h3>

          <SearchBar nonNavbar />
        </div>
      </div>
    </div>
  )
}