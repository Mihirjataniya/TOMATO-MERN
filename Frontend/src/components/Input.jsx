import React from 'react'

const Input = ({label,placeholder,onChange,type,defaultvalue,warning}) => {
  return (
    <div className='w-full my-3.5'>
    <label className='my-1 text-left text-lg'>{label}: </label>
    <input defaultValue={defaultvalue} onChange={onChange} className='w-full my-1 bg-transparent outline-none border-2 border-[#800020] px-2 py-2 rounded' placeholder={placeholder} type={type} />
    <p className='text-xs text-gray-500 px-2'>{warning}</p>
</div>
  )
}

export default Input
