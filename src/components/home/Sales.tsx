import sales from '@/mock/sales.json';
import Image from 'next/image';
import Link from 'next/link';

export default function Sales() {
    return (
        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-2 mx-auto max-w-[80%] my-16">
            {
                sales.map((sale, index) => (
                    <div
                        key={index}
                        className='flex relative rounded-md h-[400px] lg:h-[329px]'
                        style={{ gridColumn: `span ${sale.size}` }}
                    >
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