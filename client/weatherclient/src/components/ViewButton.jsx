import React from 'react'

const ViewButton = ({action, icon: Icon, testID}) => {
  return (
    <button 
        data-testid={testID}
        onClick={() => action()} 
        className='text-white w-max'>
        <Icon className='icon-size' />
    </button>
  )
}

export default ViewButton
