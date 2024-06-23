import React from 'react'
import usePopupStore from '../store/popupStore';
import Popup from '../components/Popup';

const PopupStack = () => {
    const popups = usePopupStore((state) => state.popups);
  return (
    <div className='w-full h-full fixed top-0 left-0 flex p-2 justify-center items-end pointer-events-none'>
        <div className='flex flex-col w-full gap-2'>
            {popups.map((item) => {
                return <Popup key={item.id} id={item.id} message={item.message} />
            })}
        </div>
    </div>
  )
}

export default PopupStack
