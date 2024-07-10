import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const SingleProduct = ({AddToCart}) => {
  const { productId } = useParams();
  const [singleProduct, setSingleProduct] = useState([]);

  useEffect(() => {
    const singleProductsFetch = async () => {
      try {
        const res = await axios(`https://dummyjson.com/products/${productId}`);
        setSingleProduct(res.data);
      } catch (err) {
        toast.error(err.message)
      }
    };
    singleProductsFetch();
  }, [productId]);

  if (!singleProduct) {
    return <div>Loading...</div>;
  }

// Adding the single product to cart
  const handleAddToSingleProduct = () =>{
    AddToCart(singleProduct)
    toast.success("Product added to cart sucessfully")
  }

const allProductsNavigate = useNavigate();

  return (
    <>
      <div>
        <div className=" w-[40%]  text-center mt-[100px]">
        <button 
        className="border px-6 py-2 rounded-md bg-indigo-500 text-white font-semibold
        hover:bg-indigo-600" 
        onClick={()=> allProductsNavigate("/allproducts")}>
          Back
          </button>
        </div>
        <section className="text-gray-600 body-font overflow-hidden h-full flex items-center">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={singleProduct.thumbnail}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 items-center">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {singleProduct.brand}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {singleProduct.title}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    {Array.from({ length: Math.floor(singleProduct.rating) }, (_, i) => (
                      <svg
                        key={i}
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    ))}
                    {Array.from({ length: 5 - Math.floor(singleProduct.rating) }, (_, i) => (
                      <svg
                        key={i + Math.floor(singleProduct.rating)}
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    ))}
                    <span className="text-gray-600 ml-3">{singleProduct.rating} Reviews</span>
                  </span>
                </div>
                <p className="leading-relaxed">{singleProduct.description}</p>
                <h3 className="leading-relaxed font-bold mb-3">{singleProduct.returnPolicy}</h3>

                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">${singleProduct.price}</span>
                  <button className="flex ml-auto text-white bg-yellow-400 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-yellow-500 rounded" onClick={handleAddToSingleProduct}>
                    Add to Cart
                  </button>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-red-500 ml-4">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleProduct;
