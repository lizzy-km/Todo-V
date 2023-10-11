import TodoCard from "./components/Card/TodoCard";
import NavBar from "./components/Header/NavBar";
import AllAnime from "./components/InfiniteAnime.js/AllAnime";
import SideBar from "./components/SideBar/SideBar";


export default function Home() {

  
  console.log('page is run');

  return (
    <div className=" p-[.7rem] max-[500px]:p-0 object-cover flex flex-col text-gray-300 bg-no-repeat bg-cover  w-[100%] max-h-[100vh] min-h-screen overflow-hidden bg-[url('https://raw.githubusercontent.com/lizzy-km/cloudy-km/cd60ca7bd4fdbb3863f881d146b2650242f6fd57/stacked-peaks-haikei.svg')] "
    
    >

<div className=" rounded-[8px] max-[500px]:rounded-[0px] w-full min-h-[540px] bg-blur text-gray-300 flex flex-col overflow-hidden "
      
      >
        <NavBar />

        <div className=" max-[500px]:flex-col max-[500px]:p-0 flex w-full h-[100vh] p-3 " >
          <SideBar />

          <div className="  max-[500px]:gap-0 max-[500px]:w-full max-[500px]:max-h-[100vh] w-[75%] max-h-[540px] flex flex-col overflow-y-auto m gap-4 "
          id="scrollableDiv"
           
          >
            <div className=" flex w-full overflow-hidden max-[500px]:min-h-[220px] min-h-[540px] ">
              <TodoCard />
            </div>

            <div className=" flex max-[500px]:min-w-full w-full min-h-[100vh] ">
            <AllAnime/>

            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}
