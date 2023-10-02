import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const NavBar = () => {
  return (
    <Flex w={"100%"} boxShadow={"0px 0px 3px 2px #121212"}>
          {/* Logo  */}

          <Flex justify={"start"} gap={0}>
            <Text
              fontSize={{ base: "lg", md: "2xl" }}
              fontWeight={"semibold"}
              px={".8rem"}
              py={".4rem"}
              roundedTopLeft={".5rem"}
              bg={"#FF0066"}
              color={"gray.200"}
            >
              Watch. 
            </Text>
            <Flex
              fontSize={{ base: "lg", md: "2xl" }}
              fontWeight={"semibold"}
              px={".8rem"}
              py={".4rem"}
              bg={"#001122"}
            >
              #anime
            </Flex>
          </Flex>
        </Flex>
  )
}

export default NavBar
