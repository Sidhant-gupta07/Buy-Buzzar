  import React from 'react'
  import LoginImg from "../../assets/LoginImg.jpg";
  import AboutUsImg from "../../assets/AboutUsImg.jpg"
  import AboutUsImg2 from "../../assets/AboutUsImg2.avif"
import { useNavigate } from 'react-router-dom';

  const About = () => {
    const nevigate = useNavigate()
    return (
      <>
      {/* Image Section */}
      <div className="relative mt-[70px]">
            <img
              src={LoginImg}
              alt="Login"
              className="w-full object-cover object-center h-[200px] mt-5 opacity-[0.8]"
            />
            <div className="w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]"></div>
            <h2 className="absolute top-[40%] left-[45%] text-white font-semibold text-3xl md:text-5xl">
              About Us
            </h2>
          </div>

          {/* About us Section */}
          <div>
          <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img className="object-cover object-center rounded" alt="hero" src={AboutUsImg}/>
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Who we are ?
          <br className="hidden lg:inline-block"/>
        </h1>
        <p className="mb-8 leading-relaxed">The Buy Buzzar Group is one of India's leading digital e-commerce entities and includes group companies Buy Buzzar, Myntra, Buy Buzzar Wholesale, Buy Buzzar Health+ and Cleartrip. The Group is also a majority shareholder in PhonePe, one of the leading Payments Apps in India.

Started in 2007, Buy Buzzar has enabled millions of consumers, sellers, merchants, and small businesses to be a part of India's digital commerce revolution, with a registered customer base of more than 400 million, offering over 150 million products across 80+ categories. Our efforts to democratize commerce in India, drive access and affordability, delight customers, create lakhs of jobs in the ecosystem, and empower generations of entrepreneurs and MSMEs have inspired us to innovate on many industry firsts. Buy Buzzar is known for pioneering services such as Cash on Delivery, No Cost EMI and easy returns – customer-centric innovations have made online shopping more accessible and affordable for millions of Indians. Together with its group companies, Buy Buzzar is committed to transforming commerce in India through technology.

With Catapult, Buy Buzzar aims to provide an umbrella solution to a budding brand's financing & marketing needs. The program offers marketing solutions and capital for new age direct-to-consumer brands to leapfrog into their next phase of growth. The offering goes beyond financing the brands by providing creative services and effective acquisition cost reduction solutions.</p>
      </div>
    </div>
  </section>
          </div>

          <div>
          <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Technology at <span className='text-yellow-500 font-extralight'>Buy</span> <span className='text-red-500'>Buzzar</span>
        <br className="hidden lg:inline-block"/>Innovation !
      </h1>
      <p className="mb-8 leading-relaxed">Welcome to Buy-Buzzar, where innovation meets technology to redefine your online shopping experience. At Buy-Buzzar, we believe that the future of e-commerce lies in harnessing cutting-edge technology to create a seamless, personalized, and efficient platform for our customers.

Our journey began with a vision to transform the way people shop online, and today, we are proud to be at the forefront of this revolution. Leveraging the power of advanced technologies such as Artificial Intelligence, Machine Learning, and Big Data, Buy-Buzzar offers a shopping experience that is tailored to your unique preferences and needs. Buy Buzzar technology drives path-breaking, customer 
        level innovation that makes half qualify products 
        accesible to indian shoppers, besides making the online shopping experience convenientand sameless.
        <p className='font-semibold font-serif'>
        Join us at Buy-Buzzar, and experience the trendy fashion with great deals today!
      </p>
      </p>

    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src={AboutUsImg2}/>
    </div>
  </div>
    <div className='w-full text-center mb-11'>
      <button className="border-none px-[5rem] md:px-[9rem] lg:px-[10rem] py-2 rounded-full bg-fuchsia-500 text-white font-semibold
        hover:bg-fuchsia-600"
        onClick={()=>nevigate("/allproducts")}>
          continue shopping
          </button>
    </div>
</section>
          </div>
      </>
    )
  }

  export default About
