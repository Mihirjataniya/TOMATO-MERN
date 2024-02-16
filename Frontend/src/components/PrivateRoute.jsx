import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PrivateRoute = (props) => {
    const {Component} = props

    const navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem("authToken")){
            navigate('/signup')
        }
    })

  return (
    <Component />
  )
}

export default PrivateRoute
