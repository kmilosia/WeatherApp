import React from 'react'

const ViewButton = ({action, icon: Icon}) => {
  return (
    <button 
        onClick={() => action()} 
        className='text-white w-max'>
        <Icon className='icon-size' />
    </button>
  )
}

export default ViewButton
