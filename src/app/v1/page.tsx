"use client";
import Allies from '@/components/home/Allies';
import Categories from '@/components/home/categories';
import Hero from '@/components/home/Hero';
import PreFooter from '@/components/home/PreFooter';
import Sales from '@/components/home/Sales';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Home() {
  const [sales, setSales] = useState<[]>([]);
    
  useEffect(() => {
      axios.get('/api/offers').then((response) => {
          setSales(response.data);
      })
  }, [])
  return (
    <main className="flex min-w-full flex-col overflow-hidden ">
      <Hero />

      <Sales sales={sales} />

      <Allies />

      <Categories />

      <PreFooter />
    </main >
  )
}
