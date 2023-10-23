import { Grid, Paper, Typography } from '@mui/material'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  const sales = [
    {
      title: '¡Nuestras mejores promociones!',
      content: 'Apuntate a nuestro News Letter para no perderte ninguno de nuestros descuentos.',
      image: '/images/ejemplo.png',
      size: 2
    },
    {
      title: `50% OFF`,
      content: `en citricos seleccionados`,
      image: '/images/ejemplo1.jpeg',
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
      image: '/images/ejemplo3.png',
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
    <main className="flex min-h-screen flex-col ">
      <Hero />

      <Sales />
    </main >
  )

  function Hero() {
    return (
      <div className='flex flex-col flex-items justify-center items-center text-white relative'>
        <img src="/images/login-bg.jpeg" className='max-h-[400px] w-full' />

        <div className='absolute mx-auto flex flex-col gap-8 items-center z-50 max-w-[1000px]'>

          <h2 className='font-semibold text-6xl'>
            Lo que buscas, al mejor precio
          </h2>

          <div className='font-medium'>
            En Economarket puedes comparar los precios del mismo producto en diferentes supermercados. Añade productos a tu carrito y encuentra los precios perfectos para tu mercado.
          </div>
          <div >
            <Link href="/productos">
              <Button className='bg-[#F28705] text-white text-lg rounded-md px-6 py-4 font-bold'>Empieza a mercar</Button>
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
            <div className='relative rounded-md h-[329px]' style={{ gridColumn: `span ${sale.size}` }}>
              <Image src={sale.image} layout='fill' objectFit="cover" className='w-full rounded-md -z-10' alt={sale.image} />
              <div className="flex flex-col justify-center h-full text-white gap-2 ">
                <div className="text-2xl font-bold">{sale.title}</div>
                <div className="text-sm">{sale.content}</div>
                <div className="text-sm">
                  {
                    sale.link &&
                    <Link href={sale.link}>
                      <Button className='bg-[#F28705] text-white text-lg rounded-md px-6 py-4 font-bold'>Ver más</Button>
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
    
  }
}
