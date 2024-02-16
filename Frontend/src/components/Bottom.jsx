import React from 'react'
import { Link } from 'react-router-dom'
const Bottom = ({text,to,linktext}) => {
  return (
    <p className='text-center my-1 '>{text} <Link className='underline font-bold' to={to}>{linktext}</Link></p>
  )
}

export default Bottom
