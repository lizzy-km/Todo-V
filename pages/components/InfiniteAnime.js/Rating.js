import React from 'react'
import ReactStars  from 'react-rating-stars-component'

const Rating = ({rate}) => {
   

  return (
    <ReactStars 
    count={5}
    value={(rate/10)/2}
    edit={false}
    size={20}
    activeColor="#ffd700"
    />
    
  )
}

export default Rating
