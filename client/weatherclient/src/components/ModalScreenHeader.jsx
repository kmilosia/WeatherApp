import React from 'react'
import { IoClose } from 'react-icons/io5'
import ViewButton from './ViewButton'

const ModalScreenHeader = ({title, action}) => {
  return (
    <div className='flex justify-between items-start mb-6 lg:mb-8'>
        <h1 className='text-2xl lg:text-4xl font-semibold'>{title}</h1>
        <ViewButton icon={IoClose} action={action} />
    </div>
  )
}

export default ModalScreenHeader
