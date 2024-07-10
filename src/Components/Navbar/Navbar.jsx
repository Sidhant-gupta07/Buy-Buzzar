import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { auth } from "../../Firebase/Firebase";
import toast from "react-hot-toast";

const Navbar = ({cart, userName}) => {

  const [isOpen, setIsOpen] = useState(false);

  const ToggleChange = () => {
    isOpen === false?setIsOpen(true): setIsOpen(false);
  };

  // Logout Function
  const handleLogOut = () => {
auth.signOut().then(() => {
  toast.success("logout sucessfully")
}).catch((error) => {
  toast.error(error)
});
  }


  return (
    <>
      <div className="">
        <header className="bg-white border-b border-gray-200 fixed top-0 z-10 w-full">
          <div className="container mx-auto flex justify-between p-5 items-center italic">
            <div>
              <Link to="/">
                <h3 className="font-bold text-xl md:text-2xl text-yellow-500 font-serif">
                  Buy<span className="text-red-500">Buzzar</span>
                </h3>
              </Link>
            </div>

            <div className="hidden md:block">
              <ul className="flex items-center text-lg justify-center font-semibold">
                <Link to="/">
                  <li className="mr-5 hover:text-gray-500 cursor-pointer">
                    Home
                  </li>
                </Link>

                <Link to="/allproducts">
                <li className="mr-5 hover:text-gray-500 cursor-pointer">
                  All Products
                </li>
                </Link>

                <Link to="/about">
                <li className="mr-5 hover:text-gray-500 cursor-pointer">
                  About
                </li>
                </Link>

                <Link to="/Contact">
                <li className="mr-5 hover:text-gray-500 cursor-pointer">
                  Contact Us
                </li>
                </Link>
              </ul>
            </div>

            {isOpen ? (
              <div className="" onClick={ToggleChange}>
                <ul className="flex flex-col gap-10 text-2x absolute top-[73px] h-screen w-full left-0 z-10 bg-red-500 items-center text-white justify-center font-semibold">
                <Link to="/">
                  <li className="mr-5 hover:text-gray-500 cursor-pointer">
                    Home
                  </li>
                </Link>

                <Link to="/allproducts" onClick={ToggleChange}>
                <li className="mr-5 hover:text-gray-500 cursor-pointer">
                  All Products
                </li>
                </Link>

                <Link to="/about" onClick={ToggleChange}>
                <li className="mr-5 hover:text-gray-500 cursor-pointer">
                  About
                </li>
                </Link>

                <Link to="/contact" onClick={ToggleChange}>
                <li className="mr-5 hover:text-gray-500 cursor-pointer">
                  Contact Us
                </li>
                </Link>

                </ul>

                <button
                  className="absolute top-[75px] z-10 right-0 text-white py-2 px-4 cursor-pointer"
                  onClick={ToggleChange}
                >
                  <IoClose size={30} />
                </button>
              </div>
            ) : (
              ""
            )}

            <div className="flex justify-center items-center gap-3">
              <span className="flex gap-1"><CgProfile size={24}/>{userName}</span>
              {
                userName ? (
                  <>
                  <Link to="/login">
              <button className=" bg-red-600 border-0 py-1 px-1 md:py-1 md:px-3 
              focus:outline-none hover:bg-red-500 rounded text-base  
              text-white font-semibold" onClick={handleLogOut}>
                {" "}
                Logout{" "}
              </button>
              </Link>
                  </>
                ):(
                  <Link to="/login">
              <button className=" bg-red-600 border-0 py-1 px-3 focus:outline-none hover:bg-red-500 rounded text-base  text-white font-semibold">
                {" "}
                Login{" "}
              </button>
              </Link>
                )
              }
              <Link to="/cart">
                <button className="relative">
                  <span className="absolute top-[-5px] right-0 bg-[red] text-white border-none px-1 rounded-full  text-xs">{cart.length}</span>
                  <FaCartShopping size={27} />
                </button>
              </Link>
              {
                isOpen?"":<button className="md:hidden" onClick={ToggleChange}>
                <GiHamburgerMenu size={27} />
              </button>
              }
              
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
