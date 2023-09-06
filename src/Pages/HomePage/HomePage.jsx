import React, { useContext, useEffect } from 'react'
import Billboard from '../../Components/Billboard/Billboard'
import useFeaturedContent from '../../Hooks/useFeaturedContent'
import FeaturedContent from '../../Components/FeaturedContent/FeaturedContent'
import { useNavigate } from 'react-router-dom'
import { Store } from '../../Context/Store'
import useFavourite from '../../Hooks/useFavourite'

const HomePage = () => {
  const { data: dataF, error: errorF, isLoading: isLoadingF } = useFavourite();
  const { data, error, isLoading } = useFeaturedContent("all");
  const navigate = useNavigate();
  
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {userInfo} = state;


  console.log(error)
   useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [state,dataF]);

  return (
    <div>
        <Billboard type="all"/>
        {/* {
          isLoadingF?
          <h1>Loading My List...</h1>
          : errorF ? <h1>Error</h1>
          : userInfo &&
          (<FeaturedContent data={dataF}/>)
        } */}
        {/* {
          userInfo.userList &&
          (<FeaturedContent data={userInfo?.userList}/>)
        } */}
          
        {
          isLoading? 
          <h1>Loading...</h1>
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

export default HomePage;