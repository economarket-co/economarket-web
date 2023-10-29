import { dmserif, poppins, quicksand } from '@/fonts';
import sales from '@/mock/sales.json';
import Image from 'next/image';
import Link from 'next/link';

export default function Sales() {
    return (
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-2 mx-auto max-w-[80%] my-16">
            {
                sales.map((sale, index) => (
                    <div
                        key={index}
                        className='flex relative rounded-md h-[400px] md:h-[246px] lg:h-[329px]' 
                        style={{ gridColumn: `span ${sale.size}` }}
                    >
                        <Image src={sale.image} layout='fill' className='w-full rounded-md -z-10 object-cover' alt={sale.image} />
                        <div className="flex flex-col justify-end h-full text-white gap-2 px-6 py-6">
                            <div className={`${dmserif.className} text-5xl`}>{sale.title}</div>
                            <div className={`${poppins.className} text-xl`}>{sale.content}</div>
                            <div className="text-sm">
                                {
                                    sale.link &&
                                    <Link href={sale.link} className={`${quicksand.className} underline text-xl`}>
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