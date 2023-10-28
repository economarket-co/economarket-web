import Allies from '@/components/home/Allies';
import Categories from '@/components/home/categories';
import Hero from '@/components/home/Hero';
import PreFooter from '@/components/home/PreFooter';
import Sales from '@/components/home/Sales';

export default function Home() {
  return (
    <main className="flex min-w-full flex-col overflow-hidden ">
      <Hero />

      <Sales />

      <Allies />

      <Categories />

      <PreFooter />
    </main >
  )
}
