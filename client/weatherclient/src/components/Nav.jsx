import React, { useState } from 'react'
import { IoMenu,IoClose } from "react-icons/io5";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className='w-full flex h-max'>
      <button 
      onClick={() => setMenuOpen(!menuOpen)}
      className=' text-white h-10 w-10 flex items-center justify-center'>
        {menuOpen ? <IoClose size={30}/> : <IoMenu size={30}/>}
      </button>
    </nav>
  )
}

export default Nav
