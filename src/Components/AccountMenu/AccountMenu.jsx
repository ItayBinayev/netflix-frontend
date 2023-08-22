import React, { useContext } from 'react'
import proPic from '../../assets/BlueNetflix.jpg'
import { useNavigate } from 'react-router-dom';
import { USER_SIGNOUT } from '../../Reducers/Actions';
import { Store } from '../../Context/Store';

const AccountMenu = ({visible}) => {
    if(!visible) return null;
    const {state, dispatch: ctxDispatch} = useContext(Store);
    const { userInfo } = state;
    const navigate = useNavigate()
   const signOutHandler = (async () =>{
    await ctxDispatch({type: USER_SIGNOUT});
        navigate('/login')
    })
  return (
    <div className='bg-black w-56 absolute top-14 right-0 py-5 flex flex-col border-2 border-gray-800'>
        <div className='flex flex-col gap-3'>
            <div className='px-3 group/item flex flex-row gap-3 items-center w-full'>
                <img className='w-8 rounded-md' src={proPic} alt='Profile Picture'/>
                <p className='text-white text-sm group-hover/item:underline'>
                    {userInfo.username}
                </p>
            </div>
                <hr className='bg-gray-600 border-0 h-px my-4' />
                <div className='px-3 text-center text-white text-sm hover:underline'>
                <span className='cursor-pointer' onClick={signOutHandler}>Sign out of Netflix</span>
                </div>
        </div>
    </div>
  )
}

export default AccountMenu