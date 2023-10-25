// app/providers.tsx
'use client';

import CartProvider from '@/Context/CartContext';
import { NextUIProvider } from '@nextui-org/react'
import { Toaster } from 'react-hot-toast';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <CartProvider>
        <Toaster />
        {children}
      </CartProvider>
    </NextUIProvider>
  )
}