import React, { useEffect, useState } from "react";
import axios  from "axios";
import LoginImg from "../../assets/LoginImg.jpg";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Products = ({ AddToCart }) => {
  const [allProduct, setAllProduct] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  
  const [AllCategory, setAllCategory] = useState([]);

  const [selectProducts, setSelectProducts] = useState("");


  const [searchItem, setSearchItem] = useState("");

  const [minPrice, setMinPrice] = useState("")

  const [maxPrice, setMaxPrice] = useState("")

  // All Products
  useEffect(() => {
    const AllProducts = async () => {
      const res = await axios("https://dummyjson.com/products");
      setAllProduct(res.data.products);
      setOriginalProducts(res.data.products);

    };
    AllProducts();
  }, []);

  // Product Category
  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const res = await axios("https://dummyjson.com/products/category-list");
        setAllCategory(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllCategories();
  }, []);

const filterProducts = (selecategory)=>{
  setSelectProducts(selecategory)

    const data = selecategory ? originalProducts.filter(
      (filterItem) => filterItem.category === selecategory): originalProducts
      setAllProduct(data)
}

  // Search Product by button
const handleSearchItem = () => {
  const searchproduct = originalProducts.filter((searchFilterItem)=> (
    searchFilterItem.title.toLowerCase().includes(searchItem.toLowerCase())
  ))
setAllProduct(searchproduct);
}

// price filter
const handlePrice = () => {
let min = parseFloat(minPrice);
let max = parseFloat(maxPrice);

  const filterPrice = originalProducts.filter((priceitem) =>(
    (!min || priceitem.price >= min) && (!max || priceitem.price <= max)
  ))
  setAllProduct(filterPrice);
}

  return (
    <>
      <>
      {/* Image of Heading */}
        <div className="relative mt-[70px]">
          <img
            src={LoginImg}
            alt="Login"
            className="w-full object-cover object-center h-[200px] mt-5 opacity-[0.8]"
          />
          <div className="w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]"></div>
          <h2 className="absolute top-[40%] left-[40%] text-white font-semibold text-3xl md:text-5xl">
            All Products
          </h2>
        </div>
<div className="bg-[#e2e0e0] w-[80%] mx-auto rounded-md py-3 mt-4 mb-4">
        {/* products Category Section */}
        <div className="flex justify-center my-5">
          <select
            className="p-2 border rounded"
            onChange={(e) => filterProducts(e.target.value)}
          >
            <option>Select options</option>
            {AllCategory.slice(
              0,4
            ).map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>

{/* product input and search section */}
        <div className="text-center mt-3 text-2xl flex items-center justify-center 
        md:flex-row flex-col gap-3">
          <input
            placeholder="search Item "
            className="block w-[80%] md:w-[50%] p-3 ps-10 text-sm text-gray-900
             border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-400
             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
             dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e)=>setSearchItem(e.target.value)}
            value={searchItem}
          />
          <button className="py-2.5 px-5 ml-4 text-sm font-medium focus:outline-none transition-all bg-red-500 text-white
          rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700
          focus:z-10 focus:ring-4 focus:ring-gray-400 dark:focus:ring-gray-700 dark:bg-gray-800
          dark:text-gray-400 dark:boder-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={handleSearchItem}>
            Search Product
          </button>
        </div>

{/* product filter by price */}
<div className="text-center mt-4 mb-2 flex items-center justify-center 
        md:flex-row flex-col gap-3">
          <input
            placeholder="min price "
            className="px-2 py-2 rounded-md"
            onChange={(e)=>setMinPrice(e.target.value)}
            value={minPrice}
          />

          <input
            placeholder="max price "
            className="px-2 py-2 rounded-md"
            onChange={(e)=>setMaxPrice(e.target.value)}
            value={maxPrice}
          />

          <button className="py-2.5 px-5 ml-4 text-sm font-medium focus:outline-none transition-all bg-red-500 text-white
          rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700
          focus:z-10 focus:ring-4 focus:ring-gray-400 dark:focus:ring-gray-700 dark:bg-gray-800
          dark:text-gray-400 dark:boder-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={handlePrice}>
            Search by price
          </button>
        </div>
        </div>
        {/* All Products Section */}
          <div className="gap-4 flex flex-wrap justify-center">
            {allProduct.map((AllItem) => (
              <div
                key={AllItem.id}
                className="lg:w-1/4 md:w-1/2 p-4 w-full  rounded-md shadow-lg"
              >
                <Link className="block relative h-48 rounded overflow-hidden" to={`/singleproduct/${AllItem.id}`}>
                <img
                  src={AllItem.images[0]}
                  alt="ecommerce"
                  className="object-cover object-center w-[300px] block rounded-t-lg"
                />
                </Link>

                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 font-bold">
                    {AllItem.title}
                  </h3>
                  <h1 className="text-gray-900 title-font text-lg font-medium">
                    $ {AllItem.price}
                  </h1>
                  <button className="border-none bg-blue-300 text-s px-2 rounded flex gap-1">
                    {AllItem.rating}
                    <FaStarHalfAlt size={20} />
                  </button>
                  <p className="mt-1 font-semibold">
                    availability: {AllItem.availabilityStatus}
                  </p>
                  <p className="mt-1 font-semibold">
                    {" "}
                    Stock: {AllItem.stock} pieces
                  </p>
                  <button
                    className="mt-1 border-none bg-blue-700 
                        hover:bg-blue-800 rounded-lg px-5 py-2.5 font-medium 
                        text-white text-sm focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700
                        dark:focus:ring-blue-800"
                    onClick={() => AddToCart(AllItem)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        
      </>
    </>
  );
};

export default Products;
