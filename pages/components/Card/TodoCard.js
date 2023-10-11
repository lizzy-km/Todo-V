import { Box, Flex, Image, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import HeroCard from "./heroCard";

const TodoCard = () => {
  const url = "https://kitsu.io/api/edge/trending/anime/";

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
    <Flex className="  p-[1rem] max-[500px]:px-0 max-[500px]:py-[1rem] "
      maxW={"100%"}
      minW={'100%'}
      w={"100%"}
      maxH={"100vh"}
      overflowX={"scroll"}
      overflowY={'hidden'}
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
          opacity={'0.6'}
          gap={"6"}
          justify={"space-between"}
          alignItems={"center"}
          flexDirection={"column"}
          p={"2"}
        >
          <Skeleton className=" opacity-60 card-blur " minW={"100%"} h={"100%"} rounded={"8px"} />
        </Flex>
      )}

      {isSuccess &&
        anime.map((animes) => {
          return (
            <HeroCard key={animes.id} animes={animes} />
          );
        })}
    </Flex>
  );
};

export default TodoCard;
