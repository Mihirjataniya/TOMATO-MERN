import React, { useEffect, useState } from 'react'
import Heading from '../components/Heading'
import Navbar from '../components/Navbar'
import Input from '../components/Input'
import Button from '../components/Button'
import Bottom from '../components/Bottom'
import axios from 'axios'
import notifcation from '../components/Notification'
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import API_URL from '../Config'
import ClipLoader from "react-spinners/ClipLoader";

const Login = () => {
  const [loading,setLoading] = useState(false)
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem("authToken")){
        navigate('/')
    }
  })

  const submitDetails = async () => {
    try {
        setLoading(true)
        const response =await axios.post(`${API_URL}/User/login`,{
        email: email,
        password: password
      }) 
      if (response.status === 200){
        localStorage.setItem("authToken",response.data.token)
        notifcation('success',"LogIn successful")
        setTimeout(() => {
          navigate("/")
        }, 2000);
      }
    } catch (error) {
      console.log(error)
      if(error.response.status === 404){
        notifcation('error','Invalid Password or Email')
      }else if(error.response.status === 409){
        notifcation('error',"Invalid inputs")
      }else if(error.response.status === 500){
        notifcation('error',"Something went wrong")
      }
    }finally{
      setLoading(false)
    }
  }

  return (  
    <div className='flex flex-col h-screen w-full'>
    <Navbar />
    <div className='flex-1 w-f flex justify-center max-sm:p-2 items-center'>
        <div className='w-[450px] p-8 border-4  border-[#800020] font-Inter rounded-lg'> 
            <Heading text={"Log In"} />
            <Input onChange={(e)=>{
                setEmail(e.target.value)
            }} label={"Email"} type={"text"} placeholder={"Enter Your Email"} />
            <Input onChange={(e)=>{
              setPassword(e.target.value)
            }} label={"Password"} type={"password"} placeholder={"Enter Your Password"}  warning={"Minimum 6 digits"}/>
            {loading? <div className='flex justify-center items-center my-5 w-full'> <ClipLoader color={"#800020"} size={50} aria-label="Loading Spinner" data-testid="loader"/> </div> : <Button onClick={submitDetails} text={"Log In"} /> }
            <Bottom text={"Don't Have an Account? "} to={'/signup'} linktext={'Register'} />
            <ToastContainer />
        </div>
    </div>
    </div>
  )
}

export default Login
