import React, { useState } from "react";
import LoginImg from "../../assets/LoginImg.jpg";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";

const SignUp = () => {

  const navigateLogin =  useNavigate()

  const [userSignUp, setUserSignUp] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserSignUp({...userSignUp, [e.target.name]:e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userSignUp.username || !userSignUp.email || !userSignUp.password) {
      return toast.error("All Fields are Required");
    } else {
      createUserWithEmailAndPassword(auth, userSignUp.email, userSignUp.password)
        .then(async(res) => {
          const user = res.user;
          await updateProfile(user, {
            displayName: userSignUp.username
          });
          navigateLogin("/login")
        })
        .catch((err) => toast.error(`Error: ${err.message}`));
    }
  };

  return (
    <>
      <>
        <div>
          <div className="relative">
            <img
              src={LoginImg}
              alt="Login"
              className="w-full object-cover object-center h-[200px] mt-5 opacity-[0.8]"
            />
            <div className="w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]"></div>
            <h2 className="absolute top-[40%] left-[45%] text-white font-semibold text-3xl md:text-5xl">
              Sign Up
            </h2>
          </div>

          <div className="container px-5 py-24 mx-auto flex bg-gray-400">
            <div className="mx-auto rounded-lg p-8 flex flex-col mt-10 md:mt-0 shadow-md bg-gray-300">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Sign-Up
              </h2>
              <p className="leading-relaxed mb-5 text-black-600">
                Create a new Account <br />
                Enjoy the shopping for your family with great deals.
              </p>

              <div className="relative mb-4">
                <label
                  className="leading-7 text-sm text-black-600"
                >
                  Username
                </label>
                <input
                autoComplete="off"
                  type="text"
                  id="text"
                  name="username"
                  value={userSignUp.username}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={handleChange}/>
              </div>

              <div className="relative mb-4">
                <label
                htmlFor="text"
                  className="leading-7 text-sm text-black-600"
                >
                  Email
                </label>
                <input
                autoComplete="off"
                  type="email"
                  id="email"
                  name="email"
                  value={userSignUp.email}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={handleChange}/>
              </div>

              <div className="relative mb-4">
                <label
                  className="leading-7 text-sm text-black-600"
                >
                  Create Password
                </label>
                <input
                  autoComplete="off"
                  type="password"
                  id="password"
                  name="password"
                  value={userSignUp.password}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={handleChange}/>
              </div>

              <div className="relative mb-4">
                <label
                  className="leading-7 text-sm text-black-600"
                >
                  How you reach to our website ?
                </label>
                <input
                 autoComplete="off"
                  type="text"
                  id="text"
                  name="text"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

              <button className="text-white bg-red-500 
              border-0 py-2 px-6 focus:outline-none 
              hover:bg-red-600 rounded text-lg 
              font-semibold cursor-pointer" onClick={handleSubmit}>
                sign up
              </button>
              <p className="text-xs text-black-500 mt-3">
                Already have an account?{" "}
                <Link to="/login">
                  <button className="cursor-pointer text-blue-600">
                    Log-in
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default SignUp;
