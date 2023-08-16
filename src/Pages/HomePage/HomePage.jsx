import React from 'react'
import Navbar from '../../Components/Navbar/navbar'
import Billboard from '../../Components/Billboard/Billboard'
import useFeaturedContent from '../../Hooks/useFeaturedContent'
import FeaturedContent from '../../Components/FeaturedContent/FeaturedContent'

const HomePage = () => {
  const { data, error, isLoading } = useFeaturedContent();
  
  


  return (
    <div>
        <Navbar/>
        <Billboard/>
        {
          isLoading? 
          <h1>Loading</h1>
          :
          <FeaturedContent data={data[0]}/>
        }
       

    </div>
  )
}

export default HomePage;