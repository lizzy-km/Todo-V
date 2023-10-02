import {  Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import useSideFun from "./sideFun";

const SideBar = () => {
 

 const { category,isError,isLoading,isSuccess } = useSideFun()

  return (
    <Flex
      w={"25%"}
      h={"530px"}
      rounded={"8px"}
      p={'1rem'}
      className="bg-blur bg-[#00112249] "
    >
      <Flex
      w={'100%'}
      h={'100%'}
      flexDirection={'column'}
      justify={'space-evenly'}
        >
          <Flex
          w={'100%'}
          h={'100%'}
          flexDirection={'column'}
          justify={'space-evenly'}
          >
            {
              isSuccess && category.map((categories) =>{
                return(
                  <Flex
                  onClickCapture={''}
                  backgroundPosition={'bottom'}
                  objectFit={'cover'}
                  backgroundSize={'cover'}
                  _hover={{
                    backgroundImage:'https://raw.githubusercontent.com/lizzy-km/cloudy-km/bd1a3416b93de9558f80b58c7ccf23ea5ee01985/layered-waves-haikei.svg'

                  }}
                  boxShadow={'md'}
                  cursor={'pointer'}
                  w={'100%'}
                  rounded={'8px'}
                  // bg={'blackAlpha.500'}
                  px={'1rem'}
                  py={'.5rem'}
                  justify={'space-between'} 
                  key={categories.id} >
                    <Text  >{categories.attributes.title}</Text>
                  </Flex>
                  
                )
              })
            }
            
            
          </Flex>
      </Flex>

    </Flex>
  );
};

export default SideBar;
