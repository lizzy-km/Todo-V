import React from 'react'
import { Flex, Skeleton } from '@chakra-ui/react'

const HeroCard = ({animes}) => {

    
  return (
    <Flex  className=' max-[500px]:rounded-[0px] max-[500px]:min-w-full min-w-full h-full max-[500px]:h-[200px] '
              fallBack={<Skeleton />}
              backgroundImage={animes?.attributes?.coverImage?.original}
              objectFit={"cover"}
              scrollSnapStop={"always"}
              scrollSnapAlign={"center"}
              scrollSnapType={"x"}
              
              rounded={"8px"}
              position={"relative"}
              
            >
              
              <Flex
                className=" bg-blur "
                minW={"100%"}
                minH={"100%"}
                rounded={"8px"}
                backgroundImage={
                  "https://raw.githubusercontent.com/lizzy-km/cloudy-km/73c6a3f0fb3327a2b3544b0651b11b268c05fa80/layered-waves-haikei%20(2).svg"
                }
              >
                
                
              </Flex>
            </Flex>
  )
}

export default HeroCard
