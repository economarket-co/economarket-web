'use client';
import SearchBar from '@/components/SearchBar';
import { Button, Card, CardBody, CardFooter } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

import categories from '@/mock/categories.json';

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

      {/* <Allies /> */}

      {/* <Categories /> */}

      {/* <PreFooter /> */}
    </main >
  )

  function Hero() {
    return (
      <div className='flex flex-col flex-items justify-center items-center text-white relative max-h-[600px] py-16 overflow-hidden'>
        <video src="/videos/home-bg.mp4" className='absolute min-w-full min-h-full max-w-none ' autoPlay />

        <div className='mx-auto flex flex-col gap-8 items-center z-40 max-w-[300px] lg:max-w-[1000px] text-center'>
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
      <div className="flex flex-col lg:grid lg:grid-cols-4 gap-2 mx-auto max-w-[80%] my-16">
        {
          sales.map((sale, index) => (
            <div className='flex relative rounded-md h-[400px] lg:h-[329px]' style={{ gridColumn: `span ${sale.size}` }}>
              <Image src={sale.image} layout='fill' className='w-full rounded-md -z-10 object-fill' alt={sale.image} />
              <div className="flex flex-col justify-end h-full text-white gap-2 px-6 py-6">
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

  function Categories() {
    return (
      <div className='flex flex-col items-center h-fit text-white relative py-16' >
        <img src="/images/categories-bg.png" className='absolute w-full' />

        <div className='mx-auto flex flex-col justify-between h-3/5 gap-8 items-center z-50 max-w-[80%] grow text-white'>
          <div className='flex flex-col gap-3 text-center'>
            <h3 className='text-[#033E8C] font-dmserif text-6xl'>Revisa nuestras categorías</h3>
            <p className='font-quicksand text-[#171717] text-lg'>Los productos más buscados, organizados para ti </p>
          </div>

          <div className='flex gap-6 flex-wrap'>
            {
              categories.map((category, index) => (
                <CategoryCard title={category.name} img={category.img} />
              ))
            }
          </div>
        </div>
      </div>
    )
  }

  function PreFooter() {
    return (
      <div className='flex flex-col items-center text-white relative' >
        <img src="/images/prefooter-bg.png" className='max-h-[900px] w-full' />

        <div className='absolute mx-auto flex flex-col justify-between h-3/5 py-6 gap-8 items-center z-50 max-w-[1000px] text-white'>
          <div className='text-center'>
            <p className='font-quicksand text-2xl text-white'>Encontrar el mejor precio</p>
            <p className='font-dmserif text-6xl font-semibold'>En solo tres pasos</p>
          </div>

          <div className='flex gap-6 justify-center'>
            <div className='flex flex-col items-center'>
              <img src='/icons/search.svg' className='h-14' alt='search icon' />
              <p className='font-quicksand text-xl font-semibold'>Busca tu producto</p>
            </div>

            <div className='flex flex-col items-center'>
              <img src='/icons/shopping-cart.svg' className='h-14' alt='search icon' />
              <p className='font-quicksand text-xl font-semibold'>Añadelo al carrito</p>
            </div>

            <div className='flex flex-col items-center'>
              <img src='/icons/scales.svg' className='h-14' alt='search icon' />
              <p className='font-quicksand text-xl font-semibold'>Compara los precios</p>
            </div>
          </div>

          <div className='flex flex-col gap-4 text-center'>
            <h3 className='text-[#033E8C] font-dmserif text-6xl'>{`Así que cuentanos`}</h3>

            <SearchBar nonNavbar />
          </div>
        </div>
      </div>
    )
  }

  type CategoryCardProps = {
    title: string,
    img: string
  }

  function CategoryCard(props: CategoryCardProps) {
    return (
      <Card className='hover:font-semibold cursor-pointer hover:-translate-y-6'>
        <CardBody className='p-0 h-[190px] w-[200px]'>
          <img className='h-full object-cover' src={props.img} alt={props.title} />
        </CardBody>
        <CardFooter className='bg-green-500 text-center'>
          <p className='font-dmserif text-lg text-center w-full text-white'>{props.title}</p>
        </CardFooter>
      </Card>
    )
  }
}
