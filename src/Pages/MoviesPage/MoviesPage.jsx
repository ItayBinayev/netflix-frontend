import React, { useContext, useEffect } from 'react'
import Billboard from '../../Components/Billboard/Billboard'
import useFeaturedContent from '../../Hooks/useFeaturedContent'
import FeaturedContent from '../../Components/FeaturedContent/FeaturedContent'
import { useNavigate } from 'react-router-dom'
import { Store } from '../../Context/Store'

const MoviesPage = () => {
  const { data, error, isLoading } = useFeaturedContent("movies");
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
        <Billboard type="movie"/>
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

export default MoviesPage;