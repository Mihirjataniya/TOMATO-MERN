import React, { useInsertionEffect } from 'react'
import Heading from '../components/Heading'
import Navbar from '../components/Navbar'
import Input from '../components/Input'
import Button from '../components/Button'
import Bottom from '../components/Bottom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import notifcation from '../components/Notification'
import { ToastContainer} from 'react-toastify';
import API_URL from '../Config'

const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState(0)
  const [password, setPassword] = useState("")
  const navigate = useNavigate()


  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate('/')
    }
  })

  const submitDetails = async () => {

    try {
      const response = await axios.post(`${API_URL}/User/signup`, {
        name: name,
        email: email,
        phone: phone,
        password: password
      })
      console.log(response.status)
      if (response.status === 200) {
        localStorage.setItem("authToken", response.data.token)
        notifcation('success', 'SignUp Succesful')
        setTimeout(() => {
          navigate("/")
        }, 2000);
      }
    } catch (error) {

      if (error.response.status === 400) {
        notifcation('error', 'Invalid Inputs')
      } else if (error.response.status === 409) {
        notifcation('warning', 'User Already Exists')
      } else if (error.response.status === 500) {
        notifcation('error', 'Something Went wrong')
      }
    }
  }
  return (

    <div className='flex flex-col h-screen w-full'>
      <Navbar />
      <div className='flex-1 mt-24 w-f flex justify-center max-sm:p-2 items-center'>
        <div className='w-[450px] p-8 border-4  border-[#800020] font-Inter rounded-lg'>
          <Heading text={"Sign Up"} />
          <Input onChange={(e) => {
            setName(e.target.value)
          }} label={"Name"} type={"text"} placeholder={"Enter Your Name"} />
          <Input onChange={(e) => {
            setPhone(e.target.value)
          }} label={"Phone"} type={"text"} placeholder={"Enter Your Phone NO."} />
          <Input onChange={(e) => {
            setEmail(e.target.value)
          }} label={"Email"} type={"text"} placeholder={"Enter Your Email"} />
          <Input onChange={(e) => {
            setPassword(e.target.value)
          }} label={"Password"} type={"password"} placeholder={"Enter Your Password"} />
          <Button onClick={submitDetails} text={"Sign up"} />
          <Bottom text={"Already have an account? "} to={'/login'} linktext={'LogIn'} />
          <ToastContainer />
        </div>
      </div>
    </div>

  )
}

export default Signup
