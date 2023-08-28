import React, { useContext, useEffect } from 'react'
import Navbar from '../../Components/Navbar/navbar'
import Billboard from '../../Components/Billboard/Billboard'
import useFeaturedContent from '../../Hooks/useFeaturedContent'
import FeaturedContent from '../../Components/FeaturedContent/FeaturedContent'
import { useNavigate } from 'react-router-dom'
import { Store } from '../../Context/Store'

const SeriesPage = () => {
  const { data, error, isLoading } = useFeaturedContent("series");
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {userInfo} = state;
  console.log(error)
   useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [state]);

  return (
    <div>
        <Navbar/>
        <Billboard type="series"/>
        {
          isLoading? 
          <h1>Loading</h1>
          : error ? <h1>Error</h1>
          : userInfo &&
          ( data.map((listC) =>
          <FeaturedContent data={listC} key={listC._id}/>
          )
          )
        }
       

    </div>
  )
}

export default SeriesPage;