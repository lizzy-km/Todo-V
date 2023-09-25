"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import ProvidersCh from './Providers'

const inter = Inter({ subsets: ['latin'] })



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
})
export default function RootLayout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      
    <html lang="en">
      <body className={inter.className}>
      <ProvidersCh>
        {children}
      </ProvidersCh>
        </body>
    </html> 
      
    </QueryClientProvider>
    
  )
}
