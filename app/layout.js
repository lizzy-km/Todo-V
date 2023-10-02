"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CacheProvider } from '@chakra-ui/next-js'
import ProvidersCh from './Providers'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const inter = Inter({ subsets: ['latin'] })



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
      staleTime: 1000 * 60 * 60 * 24
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
        <ReactQueryDevtools initialIsOpen={false} />

      </ProvidersCh>
        </body>
    </html> 
    </QueryClientProvider>
    
  )
}
