import React from "react";

const MobileMenu = ({ visible }) => {
  if (!visible) return null;
  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
        <div className="px-3 text-center text-white hover:underline">
            Home
            </div>
            <div className="px-3 text-center text-white hover:underline">
            Series
            </div> <div className="px-3 text-center text-white hover:underline">
            Movies
            </div>
    </div>
  );
};

export default MobileMenu;
