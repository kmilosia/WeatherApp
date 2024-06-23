export const isDaytime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString)
    const hour = dateTime.getHours()
    return hour >= 6 && hour < 21
  }