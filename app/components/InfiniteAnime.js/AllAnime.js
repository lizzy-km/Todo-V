import React, { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Button, Flex, Image, Skeleton } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";

const fetchAnimeTitles = async (page) => {
  const response = await fetch(
    `https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${page}`
  );
  return response.json();
};

function AllAnime() {
  const { data, fetchNextPage } = useInfiniteQuery(
    ["animeTitles"],
    ({ pageParam = 0 }) => fetchAnimeTitles(pageParam),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.links.next.split("offset%5D=").pop(); // next page number
      },
    }
  );

  const animeTitles = data ? data.pages.flatMap((page) => page.data) : [];

  // const popular =animeTitles?.length >0 &&  animeTitles?.filter(itm => )

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

  return (
    <Flex
      flexWrap={"wrap"}
      w={"100%"}
      gap={"4"}
      p={"3"}
      id="scrollableDiv"
      //  className=' max-h-[500px] overflow-y-auto '
    >
      <InfiniteScroll
        className="max-w-[90%] mx-auto flex flex-wrap gap-4 justify-center "
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
        {animeTitles?.length > 1 &&
          sortedProducts?.map((anime) => (
            <Flex key={anime.id}>
              <Image
                rounded={"8px"}
                cursor={"pointer"}
                fallback={<Skeleton />}
                w={"140px"}
                h={"200px"}
                objectFit={"cover"}
                alt="image"
                src={anime?.attributes?.posterImage?.original}
              />
            </Flex>
          ))}
      </InfiniteScroll>
    </Flex>
  );
}

export default AllAnime;
