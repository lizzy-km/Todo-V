"use client";

import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button, Flex, Menu, MenuButton, MenuGroup, MenuIcon, SkeletonText, Text } from "@chakra-ui/react";
//Icons

export default function Home() {

  const url = "https://jsonplaceholder.typicode.com/todos/";

  useEffect(() => {}, []);

  const getAllTodos = async () => {
    const res = await axios.get(url);
    return res?.data;
  };

  const { 
    isError,
     isLoading, 
     isSuccess, 
     data } = useQuery({
    queryKey: ["get", "todos"],
    queryFn: getAllTodos,
  });

  const todos = data;

  return (
    <Flex
    w={'100%'}
    h={'100vh'}
    bg={'blackAlpha.900'}
    color={'gray.300'}
    p={'2rem'}
    flexDirection={'column'}
    >
      <Flex
      justify={'start'}
      gap={0}
      >

        <Text
        fontSize={{ base:'lg', md:'2xl'}}
        fontWeight={'semibold'}
        px={'1rem'}
        py={'.5rem'}
        roundedLeft={'.5rem'}
        bg={'red.700'}
        >
        Todo
        </Text>
        <Flex
        fontSize={{ base:'lg', md:'2xl'}}
        fontWeight={'semibold'}
        px={'1rem'}
        py={'.5rem'}
        roundedRight={'.5rem'}
        bg={'gray.800'}
        >
          List
        </Flex>
        
      </Flex>
    </Flex>
  );
}
