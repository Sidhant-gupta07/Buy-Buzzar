import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
const Navbar = () => {
  return (
    <>
      <div>
        <header className="bg-white border-b border-gray-200">
          <div className="container mx-auto flex justify-between p-5 items-center italic">
            
            <Link to="/">
            <div>
              <h3 className="font-bold text-2xl text-yellow-500">
                Buy<span className="text-red-500">Buzzar</span>
              </h3>
            </div>
            </Link>

            <ul className="flex items-center text-lg justify-center font-semibold">
              <Link to="/"><li className="mr-5 hover:text-gray-500 cursor-pointer">Home</li></Link>
              
              <li className="mr-5 hover:text-gray-500 cursor-pointer">
                All Products
              </li>
              <li className="mr-5 hover:text-gray-500 cursor-pointer">Men's</li>
              <li className="mr-5 hover:text-gray-500 cursor-pointer">Kids</li>
              <li className="mr-5 hover:text-gray-500 cursor-pointer">
                Women's
              </li>
            </ul>

            <div className="flex justify-center items-center gap-3">
              <button className="inline-flex items-center bg-red-600 border-0 py-1 px-3 focus:outline-none hover:bg-red-500 rounded text-base mt-4 md:mt-0 text-white font-semibold">
                Login
              </button>
              <Link to="/cart"><button><FaCartShopping size={30}/></button></Link>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
