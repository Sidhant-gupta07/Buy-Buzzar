import React from 'react'
import { Link } from 'react-router-dom'
const CartEmpty = () => {
  return (
    <>
    <div className='w-[80%] h-[70vh] mt-[80px]
    container mx-auto px-4 py-4 shadow-lg rounded-md mb-7 
    flex justify-center items-center'> 
    <div className='flex items-center flex-col'>
        <img 
        src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" 
        alt="" 
        className="w-[300px] mb-10"
        />
        <h1 
        className='text-center text-2xl font-semibold mt-3'>
          Your Cart is empty!</h1>
          
          <Link to="/allproducts">
          <button className="text-white
        bg-yellow-400 border-0 py-1 px-1 md:px-3 focus:outline-none 
          hover:bg-yellow-500 rounded mt-4">
            shop now
            </button>
            </Link> 
    </div>
      </div>
    </>
  )
}

export default CartEmpty  