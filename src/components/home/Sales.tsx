"use client";
import { dmserif, poppins, quicksand } from '@/fonts';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Sale = {
    title: string;
    content: string;
    image: string;
    size: number;
    link?: string;
}

export default function Sales(props: { sales: Sale[] }) {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mx-auto max-w-[80%] my-16">
            {
                props.sales.map((sale, index) => (
                    <div
                        key={index}
                        className='flex relative rounded-md h-[210px] md:h-[280px] lg:h-[329px]' 
                        style={{ gridColumn: `span ${sale.size}` }}
                    >
                        <img src={sale.image} className='rounded-md w-full -z-10 object-cover' alt={sale.image} />
                        <div className="flex flex-col justify-end h-full text-white gap-2 px-3 md:px-6 py-6 absolute">
                            <div className={`${dmserif.className} text-[20.738px] md:text-3xl xl:text-5xl`}>{sale.title}</div>
                            <div className={`${poppins.className} text-[10px] md:text-sm xl:text-xl`}>{sale.content}</div>
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