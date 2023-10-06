import React, { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Button,  Skeleton, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Image } from "@chakra-ui/react";
import Card from "./Card";

const fetchAnimeTitles = async (page) => {
  const response = await fetch(
    `https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${page}`
  );
  const data = await response.json()
  return {...data};
};

function AllAnime() {
  const { data, fetchNextPage ,isSuccess, isLoading } = useInfiniteQuery(
    ["animeTitles"],
    ({ pageParam = 0 }) => fetchAnimeTitles(pageParam),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.links.next.split("offset%5D=").pop(); // next page number
      },
    }
  );
    useEffect(()=>{
      fetchNextPage
    },[])

  const animeTitles = data ? data.pages.flatMap((page) => page.data) : [];

  const sortedProducts =
    animeTitles?.length > 0 &&
    animeTitles?.reduce((accumulator, currentProduct) => {
      // Insert the current product into the sorted array in the correct position
      let insertIndex = 0;
      while (
        insertIndex < accumulator.length &&
        currentProduct.attributes.popularityRank >
          accumulator[insertIndex].attributes.popularityRank
      ) {
        insertIndex++;
      }
      accumulator.splice(insertIndex, 0, currentProduct);

      return accumulator;
    }, []);

    const allAnime = animeTitles?.filter(anime => anime?.title)

  return (
    <div className=" flex-wrap flex min-w-full gap-4 max-[500px]:px- p-3 "
      
      id="scrollableDiv"
    >
      
      <InfiniteScroll
        className="max-w-[95%] max-[500px]:min-w-full max-[500px]:max-w-full mx-auto flex flex-wrap max-[500px]:justify-evenly gap-6 justify-center "
        dataLength={animeTitles?.length}
        next={fetchNextPage}
        hasMore={true}
        loader={<Button isLoading={<Skeleton />}>Loading...</Button>}
        scrollableTarget="scrollableDiv"
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {animeTitles?.length > 1 && isSuccess &&
          sortedProducts?.map((anime) => (
            <div className=" flex flex-col gap-2 w-[140px] h-auto " key={anime?.id} >
              <Card    anime={anime} />

              <Text key={anime?.id}  className=" line-clamp-2 cursor-pointer bg-bottom object-cover bg-cover hover:bg-[url('https://raw.githubusercontent.com/lizzy-km/cloudy-km/bd1a3416b93de9558f80b58c7ccf23ea5ee01985/layered-waves-haikei.svg')] card-text p-1   rounded text-center " > {anime?.attributes?.titles?.en_jp} </Text>

            </div>
          ))}
      </InfiniteScroll>
    </div>
  );
}

export default AllAnime;
