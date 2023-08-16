import React from 'react'
import { isEmpty } from 'lodash'
import ContentCard from '../ContentCard/ContentCard';

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
      <div className='grid grid-cols-4 gap-2'>
        {
          data.contentList.map((content) => (
            <div className='text-white' key={content._id}><ContentCard data={content}/></div>
            
          ))
        }
      </div>
    </div>
  )
}

export default FeaturedContent