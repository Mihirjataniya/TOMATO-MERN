import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'
import axios from 'axios'
import ItemHeading from '../components/ItemHeading'
import Carousel from '../components/Carousel'
import API_URL from '../Config'
import ClipLoader from "react-spinners/ClipLoader";
import foodCategory from "../../../JSON/foodCategory.json"
const Home = () => {
    
    const [search,setSearch] = useState('')
    const [fooditems, setFooditems] = useState([])
    const [foodcategory, setFoodcategory] = useState([])
    

    const Retrivedata = async () => {

        try {
            // const response = await axios.get( `${API_URL}/Display/data`)
            setFooditems(response.data.food_items)
            setFoodcategory(response.data.food_category)
        } catch (error) {
            console.log(error)
        }

        
    }

    useEffect(() => {
        Retrivedata()
    }, [])

    return (
        <div className='overflow-x-auto'>
            <Navbar />
            <Carousel />
            
            <div className='px-10 bottom-5  w-full  max-sm:p-4'>
                        <div className=" relative bg-red-600 bg-opacity-50 flex items-center rounded">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none max-sm:">
                                <svg className="w-4 h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input onChange={(e)=>{setSearch(e.target.value)}} type="search" id="default-search" className="block w-full bg-transparent p-4 ps-10 text-sm border  rounded-lg placeholder-white max-sm:p-2 max-sm:ps-8" placeholder="Search Items.." required />
                        </div>
            </div>
            {fooditems.length == 0 ? <div className='flex flex-col justify-center items-center my-5'> <ClipLoader color={"#800020"} size={50} aria-label="Loading Spinner" data-testid="loader"/> <p>[ Loading might take few moments if backend services are down ]</p>
            <p>[ I kindly request you to come back after 2 minutes. ]</p> </div> : <div className='w-full px-10 my-8 overflow-x-auto max-sm:w-full max-sm:px-4 max-sm:my-4'>
                {foodcategory.filter((category) =>
                    fooditems.some(
                        (item) =>
                            category.CategoryName === item.CategoryName &&
                            (search === '' || item.name.toLowerCase().includes(search.toLowerCase()))
                    )
                ).map((category) => (
                    <React.Fragment key={category.CategoryName}>
                        <ItemHeading heading={category.CategoryName} />
                        <div className='my-10 flex gap-10 max-sm:my-5 max-sm:gap-4 flex-wrap max-sm:overflow-x-auto max-sm:flex-nowrap'  >
                            {fooditems.map((item) => {
                                
                                if ((category.CategoryName === item.CategoryName)  &&
                                (search === '' ||
                                    item.name.toLowerCase().includes(search.toLowerCase()) 
                                    ) ) {
                                        
                                    return (
                                        <Card
                                            key={item.name} 
                                            itemname={item.name}
                                            price={item.price}
                                            description={item.description}
                                            image={item.img}
                                            item_id = {item._id}
                                        />
                                    );
                                }
                                return null;
                            })}
                        </div>
                    </React.Fragment>
                ))} 
            </div> }
            

            <Footer />
        </div>
    )
}

export default Home
