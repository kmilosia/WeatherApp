import React, { useEffect, useState } from 'react'

const useTimeFormat = (dateString) => {
    const [time, setTime] = useState('')

  useEffect(() => {
    if (!dateString) return

    const dateObj = new Date(dateString.replace(/-/g, '/'))
    const hours = dateObj.getHours().toString().padStart(2, '0')
    const minutes = dateObj.getMinutes().toString().padStart(2, '0')
    const formattedTime = `${hours}:${minutes}`
    setTime(formattedTime)
  }, [dateString])

  return time

}

export default useTimeFormat
