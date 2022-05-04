import React, { useEffect, useState } from 'react'

function InputField({variant, placeholder, style, inputType, onChange = () => {}, ...rest}) {
  const [classList, setClassList] = useState()

  useEffect(() => {
    switch (variant) {
      case 'underlined' : {
        setClassList('border-top-0 border-start-0 border-end-0 border-2 w-100 px-3 py-2')
        break;
      }
      default : {
        setClassList('form-control')
      }
    }
    
  }, [])

  const inputHandler = (e) => {
    switch (inputType) {
      case 'number' : {
        if(!/[0-9]/.test(e.key)) {
          e.preventDefault()
        }
        break;
      }
      case 'price' : {
        if(!/[0-9.]/.test(e.key)) {
          e.preventDefault()
        }
        break;
      }
      default : {
        return 0
      }
    }
  }

  return (
    <input className={`${classList} ${style}`} placeholder={placeholder} onKeyPress={(e) => inputHandler(e)} onChange={onChange} {...rest} />
  )
}

export default InputField