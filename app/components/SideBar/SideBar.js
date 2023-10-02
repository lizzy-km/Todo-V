import {   Text } from "@chakra-ui/react";
import React from "react";
import useSideFun from "./sideFun";

const SideBar = () => {
 

 const { category,isError,isLoading,isSuccess } = useSideFun()

  return (
    <div
      className="bg-blur w-[25%] flex h-[530px] rounded-[8px] p-[1rem] bg-[#00112249] "
    >
      <div className=" w-full h-full flex flex-col justify-evenly "
     
        >
          <div className=" w-full h-full flex flex-col justify-evenly  "
        
          >
            {
              isSuccess && category.map((categories) =>{
                return(
                  <div className=" rounded-[8px] px-[1rem] py-[.5rem] justify-between shadow-md cursor-pointer w-full bg-bottom object-cover bg-cover hover:bg-[url('https://raw.githubusercontent.com/lizzy-km/cloudy-km/bd1a3416b93de9558f80b58c7ccf23ea5ee01985/layered-waves-haikei.svg')] "
                  
                  key={categories.id} >
                    <Text  >{categories.attributes.title}</Text>
                  </div>
                  
                )
              })
            }
            
            
          </div>
      </div>

    </div>
  );
};

export default SideBar;
