import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const PopularProducts = ({AddToCart}) => {

    const [popularProduct, setPopularProducct] = useState([])

    useEffect(() => {
        const popularProductsFetch = async () => {
          try {
            const res = await axios(`https://dummyjson.com/carts/5`);
            setPopularProducct(res.data.products);
          } catch (err) {
            toast.error(err.message)
          }
        };
        popularProductsFetch();
      }, [popularProduct]);

  return (
    <>
    {/* '' */}
    <div className='mt-[10rem] text-center'>
        <h2 className='text-4xl md:text-5xl font-semibold text-fuchsia-600'>Popular Products</h2>
    </div>
    <div>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
{
    popularProduct.filter((item, index) => index !== 0 && index !== 3)
    .map((popularItem)=> (

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={popularItem.id}>
        <a className="block relative h-48 rounded overflow-hidden">
          <img 
          alt="ecommerce" 
          className="object-cover object-center w-[80%] h-full block" 
          src={popularItem.thumbnail}/>
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Instock:{popularItem.title}
            </h2>
          <h3 className="text-gray-500 text-xs tracking-widest 
          title-font mb-1">In-stock: {popularItem.quantity}
            </h3>
          <p className="mt-1 font-semibold">${popularItem.price}</p>
        </div>
        <div>
        <button className="text-white
        bg-yellow-400 border-0 py-1 px-1 md:px-3 focus:outline-none 
          hover:bg-yellow-500 rounded mt-2" onClick={()=>AddToCart
          (popularItem)}>
                    Add to Cart
        </button>
        </div>
      </div>
    ))
}

                                       
    </div>
  </div>
</section>
    </div>
    </>
  )
}

export default PopularProducts