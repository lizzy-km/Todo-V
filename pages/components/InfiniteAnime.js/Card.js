import {IoMdHeartEmpty}  from 'react-icons/io'
import {FaRegUser} from 'react-icons/fa'
import { Button, Image, Skeleton, Text } from '@chakra-ui/react'
import React from 'react'
import Rating from './Rating'

const Card = ({anime}) => {

    const data = anime?.attributes

    const kConvertor = (num) => {
        return num <= 999 ? num : (num/1000).toFixed (1) + 'k'
      }

    if (anime?.attributes?.coverImage?.original && anime?.attributes?.posterImage?.medium) {
        return (
            <div className="flex justify-end items-end card-blur rounded-[8px] relative w-[140px] min-h-[200px] " key={anime.id}>
            <Image loading='lazy'
            fallback={<Skeleton/>}
        
             className=" absolute max-[500px]:min-w-[50%] rounded-[8px] cursor-pointer w-[140px] h-[200px] object-cover "
            
              alt="image"
              src={anime?.attributes?.posterImage?.medium}
            />
            <div className=" card-hold flex flex-col  justify-start items-center  relative w-full h-[100%] rounded-[8px]  " >
              <Image loading='lazy' fallback={<Skeleton/>} className=" object-center card-img  rounded-[8px]  w-[100%]  object-cover bg-[100%] "
              alt="img form anime list"
              src={anime?.attributes?.coverImage?.original}
               />
               <div className=' card-detail  max-h-[24%] overflow-hidden text-sm min-h-[10%] absolute bottom-3 p-1 left -3 w-full text-left  '>
                <div className=' card-icon h-auto p-2 flex flex-col w-full justify-start gap-1 ' >
                <Rating rate={data?.averageRating} />
                <div className=' flex gap-1 ' >
                <div className='border border-white border-1 h-4 justify-center items-center flex px-[8px] rounded bg-blur ' >
                        <p className=' line-clamp-2 text-[7px] p-0 ' > {data?.subtype.toUpperCase()} </p>
                    </div>
                    <div className='border gap-1 text-[7px] border-white border-1 h-4 justify-center items-center flex px-[8px] rounded bg-blur ' >
                     <FaRegUser/> <p className=' text-[7px] p-0 ' > {kConvertor(data?.userCount)} </p>
                    </div>
                    <div className='border gap-1 text-[7px] border-white border-1 h-4 justify-evenly items-center flex px-[8px] rounded bg-blur ' >
                     <IoMdHeartEmpty /> <p className=' text-[7px] p-0 ' > {kConvertor(data?.favoritesCount)} </p>
                    </div>
                </div>

                    
                </div>
                    <Button className=' max-h-[1.5rem] hover:bg-[#FF0066] view bg-blur text-[#fff] text-sm  '  >View</Button>
               </div>
               
            </div>
          </div>
          )
    }
  
}

export default Card
