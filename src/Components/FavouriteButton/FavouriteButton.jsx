import React from 'react'
import { ADD_FAVOURITE, REMOVE_FAVOURITE } from '../../Reducers/Actions';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { fetcherPost } from '../../libs/fetcher';

const FavouriteButton = ({movie, state, ctxDispatch}) => {
  const { userInfo } = state;
  const { userList } = userInfo;

  const isFavourite = userList.some(
    (favContent) => favContent._id === movie._id
  );

  const favButtonHandler = async () => {
    try{
      console.log(movie)
      const res = await fetcherPost("/users/list",{id: userInfo._id,content: movie._id})
      if(isFavourite)
      {
        await ctxDispatch({type: REMOVE_FAVOURITE, payload: movie})
      }
      else{
        await ctxDispatch({type: ADD_FAVOURITE, payload: movie})
      }

    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <div onClick={() => {favButtonHandler()}} className='
    cursor-pointer
    group/item
    w-6
    h-6
    lg:w-10
    lg:h-10
    border-white
    border-2
    rounded-full
    flex
    justify-center
    items-center
    transition
    hover:border-neutral-300
    '>
      {
        isFavourite ?
      <AiOutlineMinus className='text-white'/>
      : <AiOutlinePlus className='text-white'/>
      }
    </div>
  )
}

export default FavouriteButton