import React, { Children } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Carousel = ({ children, id }) => {
  const mappedChildren = Children.map(children, (child) => (
    <div className="inline-block h-full w-[24vw] p-2 cursor-pointer">
      {child}
    </div>
  ));
  const SLIDE = 364

  const slideLeft = () =>{
    var slider = document.getElementById(id);
    slider.scrollLeft = slider.scrollLeft - SLIDE
  }
  const slideRight = () =>{
    var slider = document.getElementById(id);
    slider.scrollLeft = slider.scrollLeft + SLIDE
  }


  return (
    <>
      <div className="relative flex items-center">
        <MdChevronLeft className="opacity-50 cursor-pointer text-white hover:opacity-100 invisible md:visible" onClick={slideLeft} size={40} />
        <div
          id={id}
          className="scroll-smooth w-full h-full overflow-x-scroll overflow-y-hidden whitespace-nowrap scrollbar-hide"
        >
          {mappedChildren}
        </div>
        <MdChevronRight className="opacity-50 cursor-pointer text-white hover:opacity-100 invisible md:visible" onClick={slideRight} size={40} />
      </div>
    </>
  );
};

export default Carousel;
