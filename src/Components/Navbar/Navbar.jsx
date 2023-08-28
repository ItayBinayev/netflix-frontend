import React, { useCallback, useEffect, useState } from 'react'
import logo from '../../assets/netflix-logo.svg'
import profilePic from '../../assets/BlueNetflix.jpg'
import NavbarItem from './NavbarItem'
import { BsChevronDown, BsSearch, BsBell } from 'react-icons/bs'
import MobileMenu from '../MobileMenu/MobileMenu'
import AccountMenu from '../AccountMenu/AccountMenu'
import { useNavigate } from 'react-router-dom'

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const searchHandler = () => {
    setSearchActive(!searchActive);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY >= TOP_OFFSET){
        setShowBackground(true)
      }
      else{
        setShowBackground(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return() =>{
      window.removeEventListener('scroll', handleScroll);
    }
  },[]);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  },[]);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  },[]);


  return (
    <nav className="w-full fixed z-20">
      <div
        className={`
        px-4
        md:px-16
        py-6
        flex
        flex-row
        items-center
        transition
        duration-500
        ${
          showBackground
            ? "bg-zinc-900 bg-opacity-90"
            : "bg-gradient-to-b from-black"
        }
        `}
      >
        <img className="h-4 lg:h-7" src={logo} alt="" />

        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem title="Home" redirect={() => navigate('/')} />
          <NavbarItem title="Series" redirect={() => navigate('/series')}/>
          <NavbarItem title="Movies" redirect={() => navigate('/movies')}/>
        </div>

        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown className="text-white transition" />
          <MobileMenu visible={showMobileMenu} />
        </div>

        <div className="flex flex-row ml-auto gap-7 items-center">
          <div
            className={`relative cursor-pointer transition-all duration-500 ml-2 ${
              searchActive ? " w-[15em]" : " w-[1em]"
            }`}
          >
            <BsSearch
              onClick={searchHandler}
              className="absolute m-2 left-0 top-0 bottom-0 my-auto z-10 text-gray-200 hover:text-gray-300"
            />
            <input
              type="text"
              className={`bg-black outline outline-1 appearance-none pl-8 py-1 pr-2 outline-white w-full transition-all text-white text-sm ${
                searchActive ? "visible" : "invisible pointer-events-none"
              }`}
              placeholder="Titles, people, genres"
            />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBell />
          </div>
          <div
            onClick={toggleAccountMenu}
            className="flex flex-row items-center gap-2 cursor-pointer relative"
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src={profilePic} alt="default-user-photo" />
            </div>
            <BsChevronDown
              className={`text-white transition ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar