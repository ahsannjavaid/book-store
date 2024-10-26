import React from 'react'

function InputField({ onChange, placeholder, additionalClasses }) {
  return (
    <input onChange={onChange} placeholder={placeholder} className={`rounded-lg border border-light ${additionalClasses}`} />
  )
}

export default InputField