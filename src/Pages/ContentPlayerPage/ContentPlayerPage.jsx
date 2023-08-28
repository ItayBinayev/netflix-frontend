import React from 'react'
import ReactPlayer from 'react-player'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useContent from '../../Hooks/useContent';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const ContentPlayerPage = () => {
    const { contentId } = useParams();
    const navigate = useNavigate()
    console.log(contentId)
    const { data, error, isLoading } = useContent(contentId);

  return (
    <div>
        {
            isLoading ? <p>Loading...</p> :
            error ? <p>Error</p> :

            <>
          <ReactPlayer
            url={data.movie}
            controls={true}
            pip={false}
            playing
            width="100vw"
            height="100vh"
            volume={0.3}
          />
          <AiOutlineArrowLeft
            size={80}
            className="text-white bg-transparent absolute left-0 top-0 mt-12 cursor-pointer z-50"
            onClick={()=> navigate(-1)}
          ></AiOutlineArrowLeft>
        </>

        }
    </div>
  )
}

export default ContentPlayerPage