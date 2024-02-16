import axios from 'axios'
import React, { useEffect, useState } from 'react'
import notifcation from './Notification'
import { ToastContainer } from 'react-toastify';
import API_URL from '../Config';

const Card = ({ itemname, price, description, image, item_id }) => {
  
  const [qty,setQty] = useState(1)
  
  const handleCart =async () => {
    if(!localStorage.getItem("authToken")){
      console.log("not available")
      notifcation('warning','Please Login First')
    }else{
     
    try{
    const response = await axios.post(`${API_URL}/Cart/additems`,{
      item_id:item_id,
      itemname:itemname,
      price:qty*price,
      qty:qty
    },{
      headers: {
        "authorization": "Bearer " + localStorage.getItem("authToken")
    }})
    if(response.status === 200){
      notifcation('success',"Item successfully added")
    }}catch(error){
      if(error.response.status === 404){
        notifcation('error','Cannot add the item')
      }
    }
  }
  }
  return (
    <div className={`w-[300px] bg-[#800020] rounded text-[white] p-2 relative max-sm:p-1 max-sm:w-[150px] flex flex-col`}>
      <div className='image-container h-40 max-sm:h-20 rounded overflow-hidden'>
        <img className='w-full h-full object-cover' src={image} alt="" />
      </div>
      <div className='flex-grow flex flex-col justify-between'>
        <div className='flex w-full max-sm:p-0.5 p-2 justify-between'>
          <h1 className='text-[22px] max-sm:text-[12px] text-wrap font-bold'>{itemname}</h1>
          <h1 className='text-[22px] max-sm:text-[12px] text-nowrap font-bold'>Rs. {price*qty}</h1>
        </div>
        <p className='p-2 max-sm:px-1 max-sm:py-0.5 max-sm:text-[9.5px] max-sm:leading-4 text-sm flex-grow'>{description}</p>
        <div className='px-2 mt-2 max-sm:px-1 flex justify-between items-center'>
          <div className='flex items-center gap-2 max-sm:gap-1'>
            <label className='max-sm:text-[10px]' htmlFor="">Qty: </label>
            <select onChange={(e)=>{
              setQty(e.target.value)
            }} className='text-[white] bg-transparent text-sm outline-none select-none max-sm:text-[9px] border-2 rounded border-[white] px-0.5 py-1 max-sm:px-0.5 max-sm:py-0.5 max-sm:rounded max-sm:border'>
              {[1, 2, 3, 4, 5].map((i) => (
                <option key={i} className='text-sm outline-none se max-sm:text-[8px] bg-red-600 p-0 '>{i}</option>
              ))}
            </select>
          </div>
          <button onClick={handleCart} className='border-2 max-sm:text-[9px] border-[white] px-2 py-2 max-sm:px-1 max-sm:py-0.5 rounded-md max-sm:rounded max-sm:border'>Add to Cart</button>
        </div>
      </div>
      <ToastContainer />
    </div>

  )
}

export default Card
