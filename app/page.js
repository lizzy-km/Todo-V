"use client";

import {
  Flex,
} from "@chakra-ui/react";
import NavBar from "./components/Header/NavBar";
import SideBar from "./components/SideBar/SideBar";
import TodoCard from "./components/Card/TodoCard";
import AllAnime from "./components/InfiniteAnime.js/AllAnime";
//Icons

export default function Home() {

  
  

  return (
    <div className=" p-[.7rem] object-cover flex flex-col text-gray-300 bg-no-repeat bg-cover  w-[100%] max-h-[100vh] min-h-screen overflow-hidden bg-[url('https://raw.githubusercontent.com/lizzy-km/cloudy-km/cd60ca7bd4fdbb3863f881d146b2650242f6fd57/stacked-peaks-haikei.svg')] "
    
    >

<div className=" rounded-[8px] w-full min-h-[540px] bg-blur text-gray-300 flex flex-col overflow-hidden "
      
      >
        <NavBar />

        <div className=" flex w-full h-[100vh] p-3 " >
          <SideBar />

          <div className=" w-[75%] max-h-[540px] flex flex-col overflow-y-auto gap-4 "
          id="scrollableDiv"
           
          >
            <div className=" flex w-full min-h-[540px] ">
              <TodoCard />
            </div>

            <div className=" flex w-full min-h-[100vh] ">
            <AllAnime/>

            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}
