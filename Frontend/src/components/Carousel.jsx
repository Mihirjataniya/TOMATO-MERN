import React from 'react'
import { useState } from 'react';
const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const showSlide = (index) => {
        setCurrentIndex(index);
    };
    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + 5) % 5); // For 5 images
    };
    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 5); // For 5 images
    };
  return (
    <div className='w-full pt-24 px-10 object-contain py-4 max-sm:px-4'>
                <div className="relative h-[500px] max-sm:h-[250px] object-contain overflow-hidden rounded-lg w-full ">

                    <div className={`${currentIndex === 0 ? '' : 'hidden'} duration-700 ease-in-out h-auto w-full`} data-carousel-item>
                        <img style={{ filter: 'brightness(70%)' }} src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="absolute object-cover h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 1" />
                    </div>
                    <div className={`${currentIndex === 1 ? '' : 'hidden'} duration-700 ease-in-out h-auto w-full`} data-carousel-item>
                        <img style={{ filter: 'brightness(70%)' }} src="https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="absolute object-cover h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 1" />
                    </div>
                    <div className={`${currentIndex === 2 ? '' : 'hidden'} duration-700 ease-in-out h-auto w-full`} data-carousel-item>
                        <img style={{ filter: 'brightness(70%)' }} src="https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="absolute object-cover h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 1" />
                    </div>
                    <div className={`${currentIndex === 3 ? '' : 'hidden'} duration-700 ease-in-out h-auto w-full`} data-carousel-item>
                        <img style={{ filter: 'brightness(70%)' }} src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="absolute object-cover h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 1" />
                    </div>
                    <div className={`${currentIndex === 4 ? '' : 'hidden'} duration-700 ease-in-out h-auto w-full`} data-carousel-item>
                        <img style={{ filter: 'brightness(70%)' }} src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="absolute object-cover h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 1" />
                    </div>

                    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                        <button type="button" className={`w-3 h-3 rounded-full ${currentIndex === 0 ? 'bg-black' : 'bg-gray-300'}`} aria-label="Slide 1" onClick={() => showSlide(0)}></button>
                        <button type="button" className={`w-3 h-3 rounded-full ${currentIndex === 1 ? 'bg-black' : 'bg-gray-300'}`} aria-label="Slide 2" onClick={() => showSlide(1)}></button>
                        <button type="button" className={`w-3 h-3 rounded-full ${currentIndex === 2 ? 'bg-black' : 'bg-gray-300'}`} aria-label="Slide 3" onClick={() => showSlide(2)}></button>
                        <button type="button" className={`w-3 h-3 rounded-full ${currentIndex === 3 ? 'bg-black' : 'bg-gray-300'}`} aria-label="Slide 4" onClick={() => showSlide(3)}></button>
                        <button type="button" className={`w-3 h-3 rounded-full ${currentIndex === 4 ? 'bg-black' : 'bg-gray-300'}`} aria-label="Slide 5" onClick={() => showSlide(4)}></button>
                    </div>

                    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={goToPrevSlide}>
                        <span className="inline-flex items-center justify-center w-10 h-10 max-sm:h-7 max-sm:w-7 rounded-full bg-white/30    group-focus:ring-4   group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={goToNextSlide}>
                        <span className="inline-flex items-center justify-center w-10 h-10 max-sm:h-7 max-sm:w-7 rounded-full bg-white/30    group-focus:ring-4   group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>
  )
}

export default Carousel
