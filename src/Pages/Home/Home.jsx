import React from "react";
import Hero from "../../Components/Hero/Hero";
import Service from "../../Components/Service/Service";
import Gallery from "../../Components/Gallery/Gallery";
import PopularProducts from "../../Components/PopularProducts/PopularProducts";
import Testmonial from "../../Components/Testmonial/Testmonial";

export const Home = ({AddToCart}) => {
  return (
  <>
    <Hero/>
    <Service/>
    <PopularProducts AddToCart={AddToCart}/>
    <Gallery/>
    <Testmonial/>
  </>
  )
};
