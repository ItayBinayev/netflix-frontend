import React from "react";
import { useNavigate } from "react-router-dom";

const MobileMenu = ({ visible }) => {
  if (!visible) return null;
  const navigate = useNavigate()
  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
        <div onClick={() => navigate("/")} className="px-3 text-center text-white hover:underline">
            Home
            </div>
            <div onClick={() => navigate("/series")} className="px-3 text-center text-white hover:underline">
            Series
            </div> <div onClick={() => navigate("/movies")} className="px-3 text-center text-white hover:underline">
            Movies
            </div>
    </div>
  );
};

export default MobileMenu;
