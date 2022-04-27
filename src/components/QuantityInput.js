import React, { useRef, useState, useEffect } from 'react'
import {FaPlus, FaMinus} from 'react-icons/fa'

function QuantityInput({minimal = 0, maximal, initialValue=0, onChange= () => {}, ...rest}) {
  const [value, setValue] = useState(0)
  const valueInput = useRef(null)

  useEffect(() => {
    setValue(initialValue)
    valueInput.current.value = initialValue
  }, [])
  const handleIncrement = () => {
    if (!maximal) {
      setValue(value + 1)
      valueInput.current.value = value + 1
      onChange(value + 1)
    } else {
      if (value < maximal) {
        setValue(value + 1)
        valueInput.current.value = value + 1
        onChange(value + 1)
      }
    }
  }

  const handleDecrement = () => {
    if (value > minimal) {
      setValue(value - 1)
      valueInput.current.value = value - 1 
      onChange(value - 1)
    }
  }

  const handleValueChange = (e) => {
    setValue(parseInt(e.target.value) === 'NaN' ? 0 : parseInt(e.target.value))
    onChange(e.target.value)
  }
  return (
    <div className='d-flex flex-row align-items-center numberManipulation'>
      {/* <button className='decrement'><FaMinus /></button> */}
      <button className='decrement' onClick={handleDecrement}><FaMinus /></button>
      <div className='gap3' />
      <input 
        ref={valueInput} 
        defaultValue={value} 
        className='border-0 text-center' 
        style={{width: `${String(value).length + 0.5 }ch`}}
        onChange={(e) => handleValueChange(e)} 
        onKeyPress={(e) => {
          if(!/[0-9]/.test(e.key)) {
            e.preventDefault()
          }
        }}
      />
      <div className='gap3' />
      <button className='increment' onClick={handleIncrement}><FaPlus /></button>
    </div>
  )
}

export default QuantityInput