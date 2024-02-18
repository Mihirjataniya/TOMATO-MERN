import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Heading from '../components/Heading'
import Input from '../components/Input'
import Button from '../components/Button'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import API_URL from '../Config'
import { ToastContainer } from 'react-toastify'
import notifcation from '../components/Notification'

const CheckOut = () => {
  const [searchParams] = useSearchParams()
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address,setAddress] = useState("")


  const navigate = useNavigate()
  const getUsername = async () => {
    const response = await axios.get(`${API_URL}/User/getuser`, {
      headers: {
        "authorization": "Bearer " + localStorage.getItem("authToken")
      }
    })
    setName(response.data.name)
    setPhone(response.data.phone)
  }
  useEffect(() => {
    getUsername()
  }, [])

  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handlePay = () => {
    if(address == ""){
      notifcation('warning', 'Please enter address')
    }else{
    setIsOrderPlaced(true);
    }
  };

  const continueshopping = () => {
    navigate('/')
  }

  let total = searchParams.get('total')
  return (
    <div className='flex flex-col h-screen w-full'>
      <Navbar />
      <div className='flex flex-col h-screen w-full'>
        <Navbar />
        <div style={{ position: 'fixed', top: '0', left: '0', transition: 'filter 0.3s ease-in-out', filter: blur('5px') }} className={`overlay h-[100%] w-[100%] bg-black z-1 flex items-center justify-center ${isOrderPlaced ? 'blur' : ''}`}>
          <div className='mt-24 w-full flex px-10 justify-center items-center max-sm:p-2 '>
            <div className='border-4 border-[#800020] rounded-lg p-4 max-sm:p-2'>
              <Heading text={"Place your order!!"} />
              <div className='mt-10 max-sm:mt-6'>
                <Input  type={"text"} defaultvalue={name} label={"Name"} />
                <Input type={"text"} defaultvalue={phone} label={"Phone"} />
                <Input onChange={(e)=>setAddress(e.target.value)} type={'text'} label={"Address"} placeholder={"Enter Your address"} />
                <Input type={"text"} label={"Coupon Code"} placeholder={"Enter Coupon"} />
                <select className='bg-transparent border w-full p-2 text-lg' name="Select Payment method" id="" >
                  <option value="" disabled selected>Choose payment method</option>
                  <option className='bg-black text-red-500 text-base max-sm:text-sm max-sm:w-1/2' value="">UPI</option>
                  <option className='bg-black text-red-500 text-base max-sm:text-sm max-sm:w-1/2' value="">Debit/Credit Card</option>
                  <option className='bg-black text-red-500 text-base max-sm:text-sm max-sm:w-1/2' value="">Net Banking</option>
                  <option className='bg-black text-red-500 text-base max-sm:text-sm max-sm:w-1/2' value="">Cash on delivery</option>
                </select>
                <div className='mt-4'>
                  <Button text={`Pay ${total}/-`} onClick={handlePay} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {isOrderPlaced && (
          <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} className='order-placed-popup max-sm:w-[350px] h-[300px] w-[500px] flex flex-col justify-center items-center bg-black text-3xl border-2 border-[#800020] rounded-[20px] z-20'>
            <p className='my-10 font-Lobster text-red-500'>Thank You for shopping</p>
            <button onClick={continueshopping} className='bg-[#800020] text-center px-2 py-2 rounded text-lg my-2'>Continue shopping</button>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>

  )
}

export default CheckOut
