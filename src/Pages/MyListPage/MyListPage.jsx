import React, { useContext, useEffect } from 'react'
import { Store } from '../../Context/Store'
import ContentCard from '../../Components/ContentCard/ContentCard';
import { useNavigate } from 'react-router-dom';

const MyListPage = () => {
    const { state , dispatch } = useContext(Store);
    const { userInfo } = state;
    const navigate = useNavigate()

    useEffect(() => {
      if (!userInfo) {
        navigate("/login");
      }
    }, [state]);
  

  return (
    <>
      <div className="h-24"></div>
      <h1 className="text-white text-2xl mt-20 mx-8">My List: </h1>
      <div className="grid grid-cols-4 gap-2 mt-2 mx-10 lg:mx-16">
        {(
          userInfo?.userList &&
          userInfo?.userList.map((c) => (
            <div>
              <ContentCard data={c} />
            </div>
          ))
        )}

      </div>
    </>
  )
}

export default MyListPage