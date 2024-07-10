import React, { useState } from "react";
import { db } from "../../Firebase/Firebase"
import { collection, addDoc } from "firebase/firestore"
import toast from "react-hot-toast";
import { Modal } from "flowbite-react";
import ModelSection from "../ModelSection/ModelSection";
const Contact = () => {

  const [userContact, setUserContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleContact = (e) => {
    setUserContact({ ...userContact, [e.target.name]: e.target.value });
  };

  const handleSubmitContact = (e) => {
    e.preventDefault();
    if (!userContact.username || !userContact.email || !userContact.message) {
      return toast.error("All Fields are Required");
    } else {
        addDoc(collection(db, "contactUsers"), {
          user: userContact.username,
          email: userContact.email,
          message: userContact.message
        }).then(()=> {
          toast.success(`Submited Sucessfully! Thank you ${userContact.username}`);
          setUserContact({
            username: "",
            email: "",
            message: "",
          })
        }).catch((err) => toast.error(`Error: ${err.message}`));
    }
  };

  return (
    <>
      <div>
        <section className="text-gray-600 body-font relative mt-[70px]">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                title="map"
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                    Bulding No - 14 5th floor Sector 5 Greater Noida
                    UttarPardesh India
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a className="text-indigo-500 leading-relaxed">
                    buybuzzar@email.com
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">+91 9777110000</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Contact Us
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                we're Here to Help! and Reach out to us anytime and we'll
                happily answer your questions
              </p>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  username 
                </label>
                <input
                autoComplete="off"
                  type="text"
                  id="username"
                  value={userContact.username}
                  name="username"
                  onChange={handleContact}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  autoComplete="off"
                  value={userContact.email}
                  name="email"
                  onChange={handleContact}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  autoComplete="off"
                  value={userContact.message}
                  name="message"
                  onChange={handleContact}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button
                className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg"
                onClick={handleSubmitContact}
              >
                Submit
              </button>
              <p className="text-xs text-gray-500 mt-3">
                Your feedback is valuable for us to stand in for your
                requirments
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
