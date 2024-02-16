import React, { useEffect, useState } from 'react'
import Heading from '../components/Heading'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import API_URL from '../Config'
const Cart = () => {
    const [items, setItems] = useState([])
    let Total = 0
    const navigate = useNavigate()
    useEffect(() => {
        const fetchCartItems = async () => {
            const response = await axios.get(`${API_URL}/Cart/getitems`,{
                headers: {
                    "authorization": "Bearer " + localStorage.getItem("authToken")
                }
            });
            setItems(response.data.items);

        };
        fetchCartItems();
    }, [])

    items.map((item) => {
        Total = Total + item.price
        return Total
    })

    const checkout = () => {
        console.log("clicked")
        navigate(`/CheckOut?total=${Total}`)
    }

    return (
        <div className='flex flex-col h-screen w-full'>
            <Navbar />
            <div className={`flex-1 pt-24 max-sm:pt-32 flex justify-center max-sm:p-2 items-center`}>
                <div className='w-[600px]  p-8 border-4 flex-col   border-[#800020] font-Inter rounded-lg max-sm:w-[300px] max-sm:items-center max-sm:p-2'>
                    <Heading text={"Your Cart"} />
                    <table className='w-full border border-white table-auto my-8 max-sm:table-auto'>
                        <thead className='border text-red-500 text-lg'>
                            <tr>
                                <th scope='col' className='text-center p-3 max-sm:p-1.5 max-sm:text-sm'>Item Name</th>
                                <th scope='col' className='text-center p-3 max-sm:p-1.5 max-sm:text-sm'>Qty</th>
                                <th scope='col' className='text-center p-3 max-sm:p-1.5 max-sm:text-sm'>Price</th>
                                <th scope='col' className='text-center p-3 max-sm:p-1.5 max-sm:text-sm'>Cancel</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => {
                                return (<tr className='border'>
                                    <td className='text-center p-3 max-sm:p-1.5 max-sm:text-sm'>{item.name}</td>
                                    <td className='text-center p-3 max-sm:p-1.5 max-sm:text-sm'>{item.qty}</td>
                                    <td className='text-center p-3 max-sm:p-1.5 max-sm:text-sm'>{item.price}/-</td>
                                    <td className='text-center p-3 max-sm:p-1.5 max-sm:text-sm'>
                                        <button onClick={async () => {
                                            const response = await axios.post(`${API_URL}/Cart/removeitem`, {
                                                id: item.item_id
                                            }, {
                                                headers: {
                                                    "authorization": "Bearer " + localStorage.getItem("authToken")
                                                }
                                            })
                                            setItems(response.data.updatedItem)
                                        }} className="focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" className="text-white">
                                                <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="2" />
                                                <line x1="7" y1="7" x2="17" y2="17" stroke="currentColor" strokeWidth="2" />
                                                <line x1="7" y1="17" x2="17" y2="7" stroke="currentColor" strokeWidth="2" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                    <div className='w-full px-12 py-3 border border-white my-4 flex justify-between '>
                        <h1 className='text-2xl text-red-500 font-bold max-sm:text-xl'>Total:</h1>
                        <h1 className='text-2xl text-red-500 font-bold max-sm:text-xl'>Rs. {Total}/-</h1>
                    </div>
                    <div className='flex justify-center items-center '>
                        <button onClick={checkout} className='bg-[#800020]  text-center px-2 py-2 rounded text-lg '>Check Out</button>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Cart
