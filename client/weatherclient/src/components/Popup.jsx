import React, { useEffect } from 'react'
import usePopupStore from '../store/popupStore';

const Popup = ({id, message}) => {
    const removePopup = usePopupStore((state) => state.removePopup)
    useEffect(() => {
        const timeout = setTimeout(() => {
            removePopup(id)
        }, 3000)
        return () => clearTimeout(timeout)
    },[id,removePopup])
  return (
    <div className='bg-green-600 w-full h-max p-5 rounded-md text-white font-medium center-elements'>
        <p>{message}</p>
    </div>
  )
}

export default Popup
