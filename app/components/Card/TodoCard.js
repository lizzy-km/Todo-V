import { Box, Flex, Image, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import HeroCard from "./heroCard";

const TodoCard = () => {
  const url = "https://kitsu.io/api/edge/trending/anime/";

  const loadingArr = [
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
    {
      id: "4",
    },
    {
      id: "5",
    },
    {
      id: "6",
    },
    {
      id: "7",
    },
    {
      id: "8",
    },
  ];


  const getAllTodos = async () => {
    const res = await axios.get(url);
    return res?.data;
  };

  const { isError, isLoading, isSuccess, data } = useQuery({
    queryKey: ["get", "anime"],
    queryFn: getAllTodos,
  });



  const anime = data?.data;

  return (
    <Flex className=" p-[1rem] max-[500px]:px-0 max-[500px]:py-[1rem] "
      maxW={"100%"}
      minW={'100%'}
      w={"100%"}
      maxH={"100vh"}
      overflowX={"scroll"}
      gap={"4"}
      scrollSnapStop={"normal"}
      scrollSnapAlign={"center"}
      scrollSnapType={"x"}
    >
      {isLoading && (
        <Flex
          w={"100%"}
          h={"100%"}
          rounded={"8px"}
          bg={"blackAlpha.500"}
          gap={"6"}
          justify={"space-between"}
          alignItems={"center"}
          flexDirection={"column"}
          p={"2"}
        >
          <Skeleton minW={"100%"} h={"100%"} rounded={"8px"} />
        </Flex>
      )}

      {isSuccess &&
        anime.map((animes) => {
          console.log(anime.id);
          return (
            <HeroCard key={animes.id} animes={animes} />
          );
        })}
    </Flex>
  );
};

export default TodoCard;
