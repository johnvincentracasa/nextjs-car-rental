import React from "react";
import Banner from "../../../components/Home/Home-1/Banner/Banner";
import BookingCard from "../../../components/Home/Home-1/BookingCard";

import Footer from "../../../components/Home/Home-1/Footer";
import Footer2 from "../../../components/Home/Home-1/Footer2";
import Header from "../../../components/Home/Home-1/Header";
import Hero from "../../../components/Home/Home-1/Hero/Hero";
import Hero2 from "../../../components/Home/Home-1/Hero/Hero2";
import NewsLetter from "../../../components/Home/Home-1/NewsLetter/NewsLetter";
import ProductCard from "../../../components/Home/Home-1/ProductCard/ProductCard";
import ProductCard2 from "../../../components/Home/Home-1/ProductCard/ProductCard2";

function index() {
  return (
    <>
      <Header />
      <Hero2/>
  
      
      <div className=" flex flex-row flex-wrap gap-2 overflow-hidden py-3">
        <ProductCard2 />
        <ProductCard2 />
        <ProductCard2 />
        <ProductCard2 />
        
      </div>
      <NewsLetter/>
      <Banner/>
      {/* <Hero /> */}


      {/* <BookingCard/> */}
      {/* <Footer /> */}
      <Footer2 />
    </>
  );
}

export default index;
