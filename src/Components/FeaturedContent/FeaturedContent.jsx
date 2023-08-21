import React from 'react'
import { isEmpty } from 'lodash'
import ContentCard from '../ContentCard/ContentCard';
import Carousel from '../Carousel/Carousel';

const FeaturedContent = ({data}) => {
  if (isEmpty(data))
  {
    return null;
  }
  return (
    <div className='px-4 md:px-12 mt-4 space-y-8'>
      <p className='text-white text-md md:text-xl lg:text-2xl font-semibold'>
        {data.name}
      </p>
      
        <Carousel id={data._id}>
        {
          data.contentList.map((content) => (
            <div className='text-white' key={content._id}><ContentCard data={content}/></div>
            
            ))
          }
          </Carousel>
    </div>
  )
}

export default FeaturedContent