
import React from 'react'

const NavbarItem = ({title}) => {
  return (
    <div className='text-white cursor-pointer hover:text-gray-300 transition'>
        {title}
        </div>
  )
}

export default NavbarItem