import React, { useEffect, useState } from 'react'

const useWeekDay = (dateString) => {
    const [dayOfWeek, setDayOfWeek] = useState('')
    useEffect(() => {
        if (!dateString) return
        const dateObj = new Date(dateString.replace(/-/g, '/'))
        const options = { weekday: 'long' }
        const dayName = dateObj.toLocaleDateString('en-US', options)
        setDayOfWeek(dayName)
      }, [dateString])
    
      return dayOfWeek
    }

export default useWeekDay
