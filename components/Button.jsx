import React from 'react'

function Button({ children, onClick, type, additionalClasses }) {
  return (
    <button onClick={onClick} type={type} className={`border rounded-lg p-2 inverse font-bold ${additionalClasses}`}>{children}</button>
  )
}

export default Button