import React, { useState } from "react";
import LoginImg from "../../assets/LoginImg.jpg";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
const Login = () => {

  const navigateLogin =  useNavigate()

  const [userSignUp, setUserSignUp] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserSignUp({...userSignUp, [e.target.name]:e.target.value})
    console.log(userSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userSignUp.email || !userSignUp.password) {
      return toast.error("All Fields are Required");
    } else {
      signInWithEmailAndPassword(auth, userSignUp.email, userSignUp.password)
        .then((res) => {
          navigateLogin("/")
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
              Log-in
            </h2>
          </div>

          <div className="container px-5 py-24 mx-auto flex bg-gray-400">
            <div className="mx-auto rounded-lg p-8 flex flex-col mt-10 md:mt-0 shadow-md bg-gray-300">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Log-in
              </h2>
              <p className="leading-relaxed mb-5 text-black-600">
                Already have an account?{" "}
                <button className="cursor-pointer text-blue-600">Login.</button>
                <br />
                Enjoy the shopping for your family with great deals.
              </p>

              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-black-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={handleChange}
                  value={userSignUp.email}
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="password"
                  className="leading-7 text-sm text-black-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={userSignUp.password}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={handleChange}
                />
              </div>

              <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg font-semibold cursor-pointer" onClick={handleSubmit}>
                Log in
              </button>

              <p className="text-xs text-black-500 mt-3">
                Do not have an account?{" "}
                <Link to="/signup">
                  <button className="cursor-pointer text-blue-600">
                    Sign-up
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

export default Login;
