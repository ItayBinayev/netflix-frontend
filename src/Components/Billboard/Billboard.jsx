import React from 'react'
import useBillboard from '../../Hooks/UseBillboard'

const Billboard = () => {
  const { data } = useBillboard();
  console.log(data);
  return (
    <div className='relative h-[56.25vw]'>
      <img src={data?.img} alt='billboard'/>
    </div>
  )
}

export default Billboard