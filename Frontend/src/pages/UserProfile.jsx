import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import API_URL from '../Config'
const UserProfile = () => {
    
    const navigate = useNavigate()
    const [name,setName] = useState("")
    const getUsername = async () => {
        const response = await axios.get(`${API_URL}/User/getuser`,{
            headers: {
                "authorization": "Bearer " + localStorage.getItem("authToken")
            }
        })
        setName(response.data.name)
    }
    useEffect(()=>{
        getUsername()
    },[])

    const signout = () => {
        localStorage.removeItem("authToken")
        setTimeout(() => {
            navigate('/')
        }, 500);
    }
   
    return (
        <div className='flex flex-col h-screen w-full'>
            <Navbar />
            <div className='mt-24 w-full flex px-10   max-sm:p-2 '>
                <div className='w-full border border-[#800020] p-4 '>
                    <div className='flex justify-between items-center '>
                        <div className='flex items-center gap-2'>
                            <span className='rounded-[50%] bg-[#800020] w-10 h-10 flex items-center justify-center text-xl max-sm:w-9 max-sm:h-9 max-sm:text-lg'>{name? name[0].toUpperCase() : "" }</span>
                            <h1 className='text-2xl max-sm:text-xl'>Hello, {name}</h1>
                        </div>
                        <button onClick={signout} className='bg-[#800020] text-center px-2 py-2 rounded text-lg my-2 max-sm:text-base'>Signout</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UserProfile
