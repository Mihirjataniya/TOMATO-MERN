import React from 'react'

const Footer = () => {
  return (
   

<footer className=" bottom-0 left-0  w-full  py-4 px-10 border-t shadow flex items-center justify-between max-sm:flex-col  border-gray-600">
    <span className="text-sm text-white sm:text-center">© 2024 <a href="https://flowbite.com/" className="hover:underline">Tomato™</a>. All Rights Reserved.
    </span>
    <h1 className='font-Lobster font-extralight max-sm:my-2 '>Made with ❤️ By Mihir Jataniya</h1>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:my-0">
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/mihir-jataniya/" target="_blank" className="hover:underline">Contact</a>
        </li>
    </ul>
</footer>

  )
}

export default Footer
