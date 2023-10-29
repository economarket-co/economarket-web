"use client";
import { Category } from "@prisma/client";
import { useEffect, useState } from "react";
import CategoryCard from "../cards/CategoryCard";
import axios from "axios";
import { dmserif, quicksand } from "@/fonts";

export default function Categories() {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        fetchCategories();
      }, []);
    
      async function fetchCategories() {
        try {
          const res = await axios.get('/api/categories');
          setCategories(res.data);
        } catch (error) {
          console.log(error);
        }
      }
    
    
    return (
      <div className='flex flex-col items-center h-fit text-white relative py-16' >
        <img src="/images/categories-bg.png" className='absolute w-full' />

        <div className='mx-auto flex flex-col justify-between h-3/5 gap-8 items-center z-50 max-w-[80%] grow text-white'>
          <div className='flex flex-col gap-3 text-center'>
            <h3 className={`text-[#033E8C] ${dmserif.className} text-6xl`}>Revisa nuestras categorías</h3>
            <p className={`${quicksand.className} text-[#171717] text-lg`}>Los productos más buscados, organizados para ti </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 flex-wrap w-fit justify-center md:justify-start'>
            {
              categories.map((category, index) => (
                <CategoryCard
                  key={index}
                  id={category.id}
                  title={category.name}
                  img={category.image}
                  color={category.color}
                />
              ))
            }
          </div>
        </div>
      </div>
    )
  }