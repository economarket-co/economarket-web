export default function Allies() {
    return (
      <div className='flex flex-col flex-items justify-center items-center text-white relative md:min-h-[400px] lg:min-h-[600px]'>
        <img src="/images/allies-bg.png" className='absolute min-w-full min-h-full max-w-full max-h-[300px] -z-10' />

        <div className='mx-auto py-5 flex flex-col gap-8 items-center z-50 max-w-[1000px]'>
          <img src="/images/logo-white.png" />

          <div className='text-[18px] px-4 font-medium text-center font-quicksand max-w-[500px] lg:max-w-[700px] grow'>
            Economarket es tu socio para una experiencia de compra ganadora. Colaboramos con reconocidos supermercados
            de cadena como Éxito, Carulla, Jumbo y Olímpica para ofrecerte una herramienta que te permite encontrar
            los mejores precios. Nos dedicamos a simplificar tu vida diaria, ahorrándote tiempo y dinero
            con transparencia y seguridad.
          </div>
          <div className='flex flex-col lg:flex-row justify-between gap-10'>
            <img src="/images/logo-exito.svg" />
            <img src="/images/logo-jumbo.svg" />
            <img src="/images/logo-carulla.svg" />
            <img src="/images/logo-olimpica.svg" />
          </div>
        </div>
      </div>
    )
  }