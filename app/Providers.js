"use client"
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

export default function ProvidersCh ({children})  {
  return (
    <CacheProvider>
        <ChakraProvider>
            {children}
        </ChakraProvider>
    </CacheProvider>
  )
}

// export default Providers
