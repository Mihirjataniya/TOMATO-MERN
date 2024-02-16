import React from 'react'

const Button = ({text,onClick}) => {
  return (
    <button onClick={onClick} className='bg-[#800020] w-full text-center px-2 py-2 rounded text-lg my-2'>{text}</button>
  )
}

export default Button
