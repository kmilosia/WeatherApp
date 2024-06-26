import React from 'react'
import { useMenuStore } from '../../store/menuStore';

const MenuButton = ({icon: Icon, action, closeButton, testID}) => {
    const {toggleMenu} = useMenuStore()
    const handleButton = () => {
        toggleMenu(false)
        if(!closeButton){
          action()
        }
    }
  return (
    <button data-testid={testID} onClick={handleButton} className={`mx-[2px] lg:mx-1 rounded-full p-1 hover:bg-blue-900 ${closeButton && 'block lg:hidden'}`}>
        <Icon className='text-2xl lg:text-3xl'/>
    </button>
  )
}

export default MenuButton
