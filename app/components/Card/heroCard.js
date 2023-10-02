import React from 'react'
import { Flex, Skeleton } from '@chakra-ui/react'

const HeroCard = ({animes}) => {

    
  return (
    <Flex
              fallBack={<Skeleton />}
              backgroundImage={animes?.attributes?.coverImage?.original}
              objectFit={"cover"}
              scrollSnapStop={"always"}
              scrollSnapAlign={"center"}
              scrollSnapType={"x"}
              minW={"100%"}
              h={"100%"}
              rounded={"8px"}
              position={"relative"}
              className="bg-blur bg-[#312e2e29] "
            >
              
              <Flex
                className=" bg-blur "
                minW={"100%"}
                h={"100%"}
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
