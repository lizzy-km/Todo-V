"use client";

import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuGroup,
  MenuIcon,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import NavBar from "./components/Header/NavBar";
import SideBar from "./components/SideBar/SideBar";
import TodoCard from "./components/Card/TodoCard";
import AllAnime from "./components/InfiniteAnime.js/AllAnime";
import { useEffect } from "react";
//Icons

export default function Home() {

  
  

  return (
    <Flex
    // id="scrollableDiv"
      w={"100%"}
      maxH={"100vh"}
      overflowY={'hidden'}
      backgroundImage={
        "https://raw.githubusercontent.com/lizzy-km/cloudy-km/cd60ca7bd4fdbb3863f881d146b2650242f6fd57/stacked-peaks-haikei.svg"
      }
      color={"gray.300"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"110%"}
      p={".7rem"}
      flexDirection={"column"}
    >

<Flex
        rounded={"8px"}
        w={"100%"}
        h={"100vh"}
        bg={"blackAlpha.500"}
        color={"gray.300"}
        flexDirection={"column"}
        overflow={'hidden'}
      >
        <NavBar />

        <Flex w={"100%"} h={"100vh"} p={"3"}>
          <SideBar />

          <Flex
          id="scrollableDiv"
            w={"75%"}
            maxH={"530px"}
            flexDirection={"column"}
            overflowY={"auto"}
            gap={'4'}
          >
            <Flex w={"100%"} minH={"530px"}>
              <TodoCard />
            </Flex>

            <Flex w={"100%"} minH={"530px"}>
            <AllAnime/>

            </Flex>
          </Flex>
        </Flex>
      </Flex>

      
    </Flex>
  );
}
