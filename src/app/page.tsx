'use client';
import SearchBar from '@/components/SearchBar';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {

  const sales = [
    {
      title: '¡Nuestras mejores promociones!',
      content: 'Apuntate a nuestro News Letter para no perderte ninguno de nuestros descuentos.',
      image: '/images/ejemplo0.png',
      size: 2
    },
    {
      title: `50% OFF`,
      content: `en citricos seleccionados`,
      image: '/images/ejemplo1.png',
      link: '/',
      size: 1
    },
    {
      title: `Súper Promo`,
      content: `Hatsu y otras bebidas`,
      image: '/images/ejemplo2.jpeg',
      link: '/',
      size: 1
    },
    {
      title: `Siempre frescos`,
      content: `50% en verduras seleccionadas`,
      image: '/images/ejemplo3-2.png',
      link: '/',
      size: 1
    },
    {
      title: `Tiempo de mecato!!`,
      content: `Descuentos en colombina`,
      image: '/images/ejemplo4.png',
      link: '/',
      size: 1
    },
    {
      title: `¿Tu despensa lo necesita? ¡Nosotros lo encontramos!`,
      image: '/images/ejemplo5.png',
      link: '/',
      size: 2
    }
  ]

  return (
    <main className="flex min-w-full flex-col ">
      <Hero />

      <Sales />

      <Allies />

      <PreFooter />
    </main >
  )

  function Hero() {
    return (
      <div className='flex flex-col flex-items justify-center items-center text-white relative max-h-[400px] overflow-hidden'>
        <video src="/videos/home-bg.mp4" className='w-full' autoPlay />

        <div className='absolute mx-auto flex flex-col gap-8 items-center z-40 max-w-[1000px] text-center'>

          <h2 className='font-normal text-6xl font-dmserif'>
            Lo que buscas, al mejor precio
          </h2>

          <div className='font-medium font-quicksand text-xl'>
            En Economarket puedes comparar los precios del mismo producto en diferentes supermercados. Añade productos a tu carrito y encuentra los precios perfectos para tu mercado.
          </div>
          <div >
            <Link href="/productos">
              <button className='bg-[#F28705] text-white text-lg rounded-md px-6 py-4 font-bold'>Empieza a mercar</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  function Sales() {
    return (
      <div className="grid grid-cols-4 gap-2 mx-auto max-w-[80%] my-16">
        {
          sales.map((sale, index) => (
            <div className='flex relative rounded-md h-[329px]' style={{ gridColumn: `span ${sale.size}` }}>
              <Image src={sale.image} layout='fill' objectFit="cover" className='w-full rounded-md -z-10' alt={sale.image} />
              <div className="flex flex-col justify-end h-full text-white gap-2 px-4 py-6">
                <div className="font-dmserif text-5xl">{sale.title}</div>
                <div className="font-poppins text-xl">{sale.content}</div>
                <div className="text-sm">
                  {
                    sale.link &&
                    <Link href={sale.link} className='font-quicksand underline text-xl'>
                      {`Ver más`}
                    </Link>

                  }
                </div>
              </div>
            </div>
          ))
        }
      </div>
    )
  }

  function Allies() {
    return (
      <div className='flex flex-col flex-items justify-center items-center text-white relative' >
        <img src="/images/allies-bg.png" className='max-h-[900px] w-full' />

        <div className='absolute mx-auto py-5 flex flex-col gap-8 items-center z-50 max-w-[1000px]'>

          <img src="/images/logo-white.png" />

          <div className='text-[18px] font-medium text-center font-quicksand max-w-[700px]'>
            Economarket es tu socio para una experiencia de compra ganadora. Colaboramos con reconocidos supermercados
            de cadena como Éxito, Carulla, Jumbo y Olímpica para ofrecerte una herramienta que te permite encontrar
            los mejores precios. Nos dedicamos a simplificar tu vida diaria, ahorrándote tiempo y dinero
            con transparencia y seguridad.
          </div>
          <div className='flex flex:col lg:flex-row justify-between gap-10'>
            <img src="/images/logo-exito.svg" />
            <img src="/images/logo-jumbo.svg" />
            <img src="/images/logo-carulla.svg" />
            <img src="/images/logo-olimpica.svg" />
          </div>
        </div>
      </div>
    )
  }

  function PreFooter() {
    return (
      <div className='flex flex-col flex-items items-center text-white relative' >
        <img src="/images/prefooter-bg.png" className='max-h-[900px] w-full' />

        <div className='absolute mx-auto flex flex-col py-6 gap-8 items-center z-50 max-w-[1000px] text-white'>
          <div className='text-center'>
            <p className='font-quicksand text-3xl text-white'>Encontrar el mejor precio</p>
            <p className='font-dmserif text-6xl font-semibold'>En solo tres pasos</p>
          </div>

          <div className='flex gap-6 justify-center'>
            <div>
              <p>Busca tu producto</p>
            </div>

            <div>
              <p>Añadelo al carrito</p>
            </div>

            <div>
              <p>Compara los precios</p>
            </div>
          </div>

          <div>
            <h3>{`Así que cuentanos`}</h3>

            <SearchBar />
          </div>
        </div>
      </div>

    )
  }
}
