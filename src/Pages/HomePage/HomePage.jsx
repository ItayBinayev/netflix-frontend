import React, { useContext, useEffect } from 'react'
import Navbar from '../../Components/Navbar/navbar'
import Billboard from '../../Components/Billboard/Billboard'
import useFeaturedContent from '../../Hooks/useFeaturedContent'
import FeaturedContent from '../../Components/FeaturedContent/FeaturedContent'
import { useNavigate } from 'react-router-dom'
import { Store } from '../../Context/Store'

const HomePage = () => {
  const { data, error, isLoading } = useFeaturedContent();
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {userInfo} = state;
   useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
        <Navbar/>
        <Billboard/>
        {
          isLoading? 
          <h1>Loading</h1>
          :
          ( data.map((listC) =>
          <FeaturedContent data={listC} key={listC._id}/>
          )
          )
        }
       

    </div>
  )
}

export default HomePage;