import {   Text } from "@chakra-ui/react";
import React from "react";
import useSideFun from "./sideFun";

const SideBar = () => {
 

 const { category,isError,isLoading,isSuccess } = useSideFun()

  return (
    <div
      className="bg-blur max-[500px]:w-full w-[25%] flex max-[500px]:h-auto  h-[530px] max-[500px]:rounded-[0px] rounded-[8px] p-[1rem] bg-[#00112249] "
    >
      <div className=" w-full h-full flex flex-col justify-evenly "
     
        >
          <div className=" max-[500px]:justify-start snap-always snap-x w-full max-[500px]:h-auto h-full max-[500px]:max-w-[100%] max-[500px]:flex-row overflow-x-auto flex flex-col justify-evenly  "
        
          >
            {
              isSuccess && category.map((categories) =>{
                return(
                  <div className="  bg-blur snap-center max-[500px]:text-center max-[500px]:items-center rounded-[8px] px-[1rem] text py-[.5rem] max-[500px]:justify-center justify-between  cursor-pointer max-[500px]:min-w-[100%] w-full bg-bottom object-cover bg-cover hover:bg-[url('https://raw.githubusercontent.com/lizzy-km/cloudy-km/bd1a3416b93de9558f80b58c7ccf23ea5ee01985/layered-waves-haikei.svg')] "
                  
                  key={categories.id} >
                    <Text rounded={'8px'} >{categories.attributes.title}</Text>
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
