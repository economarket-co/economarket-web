import { dmserif, poppins, quicksand } from '@/fonts';
import sales from '@/mock/sales.json';
import Image from 'next/image';
import Link from 'next/link';

export default function Sales() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mx-auto max-w-[80%] my-16">
            {
                sales.map((sale, index) => (
                    <div
                        key={index}
                        className='flex relative rounded-md h-[300px] md:h-[246px] lg:h-[329px]' 
                        style={{ gridColumn: `span ${sale.size}` }}
                    >
                        <img src={sale.image} className='rounded-md w-full -z-10 object-fill' alt={sale.image} />
                        <div className="flex flex-col justify-end h-full text-white gap-2 px-6 py-6 absolute">
                            <div className={`${dmserif.className} text-2xl md:text-3xl xl:text-5xl`}>{sale.title}</div>
                            <div className={`${poppins.className} text-sm xl:text-xl`}>{sale.content}</div>
                            <div className="text-sm">
                                {
                                    sale.link &&
                                    <Link href={sale.link} className={`${quicksand.className} underline text-sm lg:text-xl`}>
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