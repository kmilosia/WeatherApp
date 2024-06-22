import React from 'react'

const ViewButton = ({action, icon: Icon}) => {
  return (
    <button 
        onClick={() => action()} 
        className='text-white w-max'>
        <Icon size={30} />
    </button>
  )
}

export default ViewButton
