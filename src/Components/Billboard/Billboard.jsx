import React from "react";
import useBillboard from "../../Hooks/UseBillboard";
import { AiOutlineInfoCircle } from "react-icons/ai"

const Billboard = () => {
  const { data } = useBillboard();
  return (
    <>
      <div className="relative h-[56.25vw] ">
        <img
          className="w-full h-full absolute object-cover"
          src={data?.imgThumb}
          alt=""
        />
        <div className="absolute w-full h-full bg-zinc-900 bg-gradient-to-b from-zinc-900 via-transparent to-transparent bg-opacity-40"></div>
      </div>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {data?.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%]  md:w-[90%] lg:w-[50%] drop-shadow-xl">
          {data?.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <button className="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition">
            <AiOutlineInfoCircle className="mr-1"/>
            More Info
          </button>
        </div>
      </div>
      
    </>
  );
};

export default Billboard;
