import { Card, CardBody, CardFooter } from "@nextui-org/react"

export default function ProductsPage() {
    return (
        <main className="flex min-w-full flex-col overflow-hidden ">
            <div className='flex flex-col flex-items justify-center text-white relative py-16 overflow-hidden'>
                <img src="/images/products/products-bg.png" className='absolute min-w-full min-h-full max-w-full -z-10' />

                <div className="flex gap-4 items-center text-white divide-x-2 px-16">
                    <h1 className="font-dmserif text-6xl max-w-[200px]">Productos</h1>

                </div>
            </div>

            <div className="flex flex-col">
                <h1>Todos los productos</h1>


            </div>
        </main>
    )

    type ProductCardProps = {
        name: string,
        img: string,
        unidad: string,
        companies: string[],
    }

    function ProductCard(props: ProductCardProps) {
        return (
            <Card className='hover:font-semibold cursor-pointer hover:-translate-y-6'>
                <CardBody className='p-0 h-[190px] w-[200px]'>
                    <img className='h-full object-cover' src={props.img} alt={props.name} />
                </CardBody>
                <CardFooter className='px-4'>
                    <p className='font-quicksand text-sm text-[#343434] font-medium'>{props.name}</p>
                    <p className='font-quicksand text-sm text-[#343434]'>{props.name}</p>
                    <p className='font-quicksand text-sm text-[#343434]'>{props.companies.join(',')}</p>
                </CardFooter>
            </Card>
        )
    }
}