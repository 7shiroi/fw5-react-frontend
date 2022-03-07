const getDisplayDate = (startDate, endDate, days=null)=>{
  let displayDate = ''
  const start = new Date(startDate)
  let end = null
  if (days) {
  end = addDays(start, days - 1)
  }
  if (endDate) {
    end = new Date(endDate)
  }
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  if(start.getFullYear() === end.getFullYear()){
    if(start.getMonth() === end.getMonth()){
      if(start.getDate() === end.getDate()){
        displayDate = `${months[start.getMonth()]} ${start.getDate()} ${start.getFullYear()}`
      }else{
        displayDate = `${months[start.getMonth()]} ${start.getDate()}-${end.getDate()} ${start.getFullYear()}`
      }
    }else{
      displayDate = `${months[start.getMonth()]} ${start.getDate()} - ${months[end.getMonth()]} ${end.getDate()} ${start.getFullYear()}`
    }
  }else{
    displayDate = `${months[start.getMonth()]} ${start.getDate()} ${start.getFullYear()} - ${months[end.getMonth()]} ${end.getDate()} ${end.getFullYear()}`
  }

  return displayDate;
}

const addDays = (date, days) => {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

export default getDisplayDate